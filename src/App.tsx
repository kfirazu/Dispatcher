import theme from './styles/theme'
import { CssBaseline, ThemeProvider } from '@mui/material';
import AppHeader from './components/App-Header/app-header';
import { useEffect } from 'react';
import SortBar from './components/Sort-Bar/sort-bar'
import FeedList from './components/FeedList/feed-list'
import Dashboard from './components/Dashboard/dashboard'
import { Article } from './models/article-interface'
import { AppContainer, ContentWrapper, MainContainer, StyledContentContainer } from './styles/global-styles';
import useIsMobile from './hooks/useIsMobile';
import FilterBar from './components/Filter/filter-bar';
import { useAppDispatch, useAppSelector } from './store/hooks.store';
import { newsService } from './services/news.service';
import { useQuery } from '@tanstack/react-query'
import { UseIsTablet } from './hooks/useIsTablet';
import { setInitialArticleList } from './store/news/news.reducer';
import SideBar from './components/side-bar/side-bar';
import NoData from './components/No-Data/no-data';
import { setCurrArticlesSources, setEverythingSources } from './store/news/filter.reducer';


function App() {

  const isMobile = useIsMobile()
  const isTablet = UseIsTablet()
  const dispatch = useAppDispatch()
  const isEverything = useAppSelector(state => state.system.isEverything)
  const articleList = useAppSelector(state => state.news.articleList)
  const filterBy = useAppSelector(state => state.filter.filterBy)
  const searchQuery = useAppSelector(state => state.filter.searchQuery)

  const loadInitialData = async () => {
    const res = await newsService.query(filterBy, searchQuery)
    return res.articles
  }
  // Fetch initial articles using react-query
  const { data: initialArticles, isLoading } = useQuery<Article[]>(["initialArticles"], loadInitialData);

  // Set the initial articles to Redux store 
  useEffect(() => {
    if (initialArticles) {
      dispatch(setInitialArticleList(initialArticles))
    }

  }, [])

  useEffect(() => {
    const currSources = newsService.getCurrArticleListSources(articleList)
    dispatch(setCurrArticlesSources(currSources))
  }, [articleList])

  useEffect(() => {
    if (isEverything) {
      (async () => {
        const allSources = await newsService.getSources();
        dispatch(setEverythingSources(allSources))
      })();
    }

  }, [isEverything])


  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer isMobile={isMobile} isTablet={isTablet}>
          <AppHeader />
          {(isMobile || isTablet) && <SideBar children={[]} />}
          <MainContainer isMobile={isMobile} isTablet={isTablet}>
            {/* {!isNoData ? */}
            {articleList.length ?
              <ContentWrapper isMobile={isMobile}>
                {isEverything
                  ? <SortBar />
                  : <FilterBar />
                }
                <StyledContentContainer >
                  <FeedList />
                  <Dashboard />
                </StyledContentContainer>
              </ContentWrapper>

              : <NoData />
            }
          </MainContainer>

        </AppContainer>
      </ThemeProvider>
    </>
  )
}



export default App


