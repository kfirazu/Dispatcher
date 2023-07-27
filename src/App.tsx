import theme from './styles/theme'
import { CssBaseline, ThemeProvider } from '@mui/material';
import AppHeader from './components/App-Header/app-header';
import { useEffect, useState } from 'react';
import FilterBar from './components/Filter/filter-bar';
import SortBar from './components/Sort-Bar/sort-bar'
// import NewsContext from './context/news-context'
import FeedList from './components/FeedList/feed-list'
import newsData from './data/news.json'
import Dashboard from './components/Dashboard/dashboard'
// import { newsService } from './services/news.service'
// import { filterByInterface } from './models/filter-by-interface'
import { Article } from './models/article-interface'
import { AppContainer, MainContainer, StyledContentContainer } from './styles/global-styles';
import useIsMobile from './hooks/useIsMobile';
import SideBar from './components/side-bar/side-bar';
import { UseIsTablet } from './hooks/useIsTablet';

function App() {

  //Temporary to fetch mock data
  const [articleList, setArticleList] = useState<Article[]>([])
  const [IsEverything, setIsEverything] = useState(false)
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const isMobile = useIsMobile()
  const isTablet = UseIsTablet()

  // Fetch Data
  // useEffect(() => {
  //   ; (async (filterBy) => {
  //     try {
  //       const newsFeed = await newsService.query(filterBy)
  //       setNews(newsFeed)
  //     } catch (err) {
  //       console.log('err from cmp', err)
  //     }
  //   })()
  // }, [])

  useEffect(() => {
    setArticleList(newsData.articles.slice(0, 10))
  }, [])

  const [filterBy, setFilterBy] = useState({
    type: '',
    country: '',
    source: '',
    category: '',
    keyword: ''
  })

  const onSetFilterBy = (newFilterBy: any) => {
    setFilterBy(newFilterBy)
  }

  const onCloseSideBar = () => {
    setIsSideBarOpen(false)
  }

  const onOpenSideBar = () => {
    setIsSideBarOpen(true)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer isMobile={isMobile} isTablet={isTablet}>
          <AppHeader />
          {(isMobile || isTablet) && <SideBar onCloseSideBar={onCloseSideBar} isSideBarOpen={isSideBarOpen} />}
          <MainContainer isMobile={isMobile} isTablet={isTablet}>
            {/* <NewsContext.Provider value={{
              filterBy: filterBy,
              updateFilterBy: onSetFilterBy
              
            }}> */}
            <div>
              {IsEverything
                ? <SortBar onOpenSideBar={onOpenSideBar} />
                : <FilterBar onOpenSideBar={onOpenSideBar} />
              }
              <StyledContentContainer >
                <FeedList articleList={articleList} isSideBarOpen={isSideBarOpen} />
                <Dashboard articleList={articleList} />
              </StyledContentContainer>
            </div>
          </MainContainer>
          {/* </NewsContext.Provider> */}
        </AppContainer>
      </ThemeProvider>
    </>
  )
}



export default App
