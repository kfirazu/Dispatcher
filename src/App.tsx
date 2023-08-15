import theme from './styles/theme'
import { CssBaseline, ThemeProvider } from '@mui/material';
import AppHeader from './components/App-Header/app-header';
import { useEffect } from 'react';
import FeedList from './components/FeedList/feed-list'
import Dashboard from './components/Dashboard/dashboard'
import { AppContainer, MainContainer, StyledContentContainer } from './styles/global-styles';
import useIsMobile from './hooks/useIsMobile';
import { useAppDispatch, useAppSelector } from './store/hooks.store';
import { newsService } from './services/news.service';
import { UseIsTablet } from './hooks/useIsTablet';
import SideBar from './components/side-bar/side-bar';
import { setCurrArticlesSources, setEverythingSources } from './store/news/filter.reducer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getIPAddress } from './store/thunks/fetchDataThunk';
import Filter from './components/Sort-Bar/filter';
import PageTitle from './components/Feed-List-Title/feed-list-title';

function App() {

  const isMobile = useIsMobile()
  const isTablet = UseIsTablet()
  const dispatch = useAppDispatch()
  const isEverything = useAppSelector(state => state.system.isEverything)
  const articleList = useAppSelector(state => state.news.articleList)
  // const isFirstSearch = useAppSelector(state => state.news.isFirstSearch)

  useEffect(() => {
    dispatch(() => getIPAddress())
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
      })()
    }

  }, [isEverything])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer isMobile={isMobile} isTablet={isTablet}>
          <AppHeader />
          {(isMobile || isTablet) && <SideBar />}
          <MainContainer isMobile={isMobile} isTablet={isTablet}>
            <Filter />
            <PageTitle />
            <StyledContentContainer >
              <FeedList />
              <Dashboard />
            </StyledContentContainer>
          </MainContainer>
          <ToastContainer />
        </AppContainer>
      </ThemeProvider >
    </>
  )
}



export default App


