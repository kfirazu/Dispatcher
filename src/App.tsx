import theme from './styles/theme'
import { CssBaseline, ThemeProvider } from '@mui/material';
import AppHeader from './components/App-Header/app-header';
import { useEffect } from 'react';
import SortBar from './components/Sort-Bar/sort-bar'
import FeedList from './components/FeedList/feed-list'
import Dashboard from './components/Dashboard/dashboard'
import { Article } from './models/article-interface'
import { AppContainer, MainContainer, StyledContentContainer } from './styles/global-styles';
import useIsMobile from './hooks/useIsMobile';
import FilterBar from './components/Filter/filter-bar';
import { useAppDispatch, useAppSelector } from './store/hooks.store';
import { newsService } from './services/news.service';
import { useQuery } from '@tanstack/react-query'
import { UseIsTablet } from './hooks/useIsTablet';
import { setInitialArticleList } from './store/news/news.reducer';
import SideBar from './components/side-bar/side-bar';


function App() {

  const isMobile = useIsMobile()
  const isTablet = UseIsTablet()
  const dispatch = useAppDispatch()
  const IsEverything = useAppSelector(state => state.system.isEverything)

  // Fetch initial articles using react-query
  const { data: initialArticles } = useQuery<Article[]>(["initialArticles"], newsService.fetchInitialArticles, {
    staleTime: 300000, // 5 minutes (how long the data is considered fresh)
  });

  // Set the initial articles to Redux store 
  useEffect(() => {
    if (initialArticles) {
      dispatch(setInitialArticleList(initialArticles))
    }
  }, [dispatch, initialArticles]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer isMobile={isMobile} isTablet={isTablet}>
          <AppHeader />
          {(isMobile || isTablet) && <SideBar  />}
          <MainContainer isMobile={isMobile} isTablet={isTablet}>
            {/* <NewsContext.Provider value={{
              filterBy: filterBy,
              updateFilterBy: onSetFilterBy
              
            }}> */}
            <div>
              {IsEverything
                ? <SortBar  />
                : <FilterBar  />
              }
              <StyledContentContainer >
                <FeedList  />
                <Dashboard  />
              </StyledContentContainer>
            </div>
          </MainContainer>
        </AppContainer>
      </ThemeProvider>
    </>
  )
}



export default App


