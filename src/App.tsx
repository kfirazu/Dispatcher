import theme from './styles/theme'
import { CssBaseline, ThemeProvider } from '@mui/material';
import AppHeader from './components/App-Header/app-header';
import { useEffect, useState } from 'react';
import SortBar from './components/Sort-Bar/sort-bar'
import FeedList from './components/FeedList/feed-list'
import Dashboard from './components/Dashboard/dashboard'
import { Article } from './models/article-interface'
import { AppContainer, ContentWrapper, MainContainer, StyledContentContainer } from './styles/global-styles';
import useIsMobile from './hooks/useIsMobile';
import FilterBar from './components/Filter/filter-bar';
import { useAppDispatch, useAppSelector } from './store/hooks.store';
import { PAGE_SIZE, newsService } from './services/news.service';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query'
import { UseIsTablet } from './hooks/useIsTablet';
import { setInitialArticleList } from './store/news/news.reducer';
import SideBar from './components/side-bar/side-bar';
import NoData from './components/No-Data/no-data';
import { setFilterCountries, setFilterLanguageOptions, setFilterSourcesOptions } from './store/news/filter.reducer';
import { countries, languages } from './constants/constants';


function App() {

  const isMobile = useIsMobile()
  const isTablet = UseIsTablet()
  const dispatch = useAppDispatch()
  const IsEverything = useAppSelector(state => state.system.isEverything)
  const articleList = useAppSelector(state => state.news.articleList)
  // const filterBy = useAppSelector(state => state.filter.filterBy)
  // const searchQuery = useAppSelector(state => state.filter.searchQuery)

  // const isNoData = useAppSelector(state => state.system.isNoData)
  // const [isNewEverything, setIsNewEverything] = useState<boolean>(false)

  // Fetch initial articles using react-query
  const { data: initialArticles, isLoading } = useQuery<Article[]>(["initialArticles"], newsService.fetchInitialArticles, {
    staleTime: 300000, // 5 minutes (how long the data is considered fresh)
  });

  // Set the initial articles to Redux store 
  useEffect(() => {
    if (initialArticles) {
      dispatch(setInitialArticleList(initialArticles))
    }

  }, [isLoading])

  useEffect(() => {
    const sources = newsService.getCurrArticleListSources(articleList)
    dispatch(setFilterSourcesOptions(sources))
  }, [articleList])

  useEffect(() => {
    (async () => {
      const sources = await newsService.getSources()
      IsEverything && (
        dispatch(setFilterSourcesOptions(sources))

      )
    })()
    dispatch(setFilterCountries(countries))
    dispatch(setFilterLanguageOptions(languages))

  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer isMobile={isMobile} isTablet={isTablet}>
          <AppHeader />
          {(isMobile || isTablet) && <SideBar />}
          <MainContainer isMobile={isMobile} isTablet={isTablet}>
            {/* {!isNoData ? */}
            {articleList.length ?
              <ContentWrapper isMobile={isMobile}>
                {IsEverything
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


