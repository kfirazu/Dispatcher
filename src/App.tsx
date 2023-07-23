import theme from './styles/theme'
import { CssBaseline, ThemeProvider } from '@mui/material';
import AppHeader from './components/App-Header/app-header';
import { useEffect, useState } from 'react';
import Filter from './components/Filter/filter';
import SortBar from './components/Sort-Bar/sort-bar'
// import NewsContext from './context/news-context'
import FeedList from './components/FeedList/feed-list'
import newsData from './data/news.json'
import Dashboard from './components/Dashboard/dashboard'
import { newsService } from './services/news.service'
// import { filterByInterface } from './models/filter-by-interface'
import { Article } from './models/article-interface'
import { AppContainer, MainContainer } from './styles/global-styles';
import useIsMobile from './hooks/useIsMobile';
import SideBar from './components/side-bar/side-bar';

function App() {

  //Temporary to fetch mock data
  const [articleList, setArticleList] = useState<Article[]>([])
  const [IsEverything, setIsEverything] = useState(true)
  const [isSideBarOpen, setIsSideBarOpen] = useState(true)
  const isMobile = useIsMobile()

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
        <AppContainer>
          {/* <NewsContext.Provider value={{
            filterBy: filterBy,
            updateFilterBy: onSetFilterBy

          }}> */}
          <AppHeader />

          {IsEverything ?
            <SortBar onOpenSideBar={onOpenSideBar}/>
            : <Filter />
          }
          {isMobile && <SideBar onCloseSideBar={onCloseSideBar} isSideBarOpen={isSideBarOpen} />}
          <MainContainer isMobile={isMobile}>
            <div style={{ borderTop: '1px solid #D9DBE9', display: 'flex' }}>
              <FeedList articleList={articleList} />
              <Dashboard articleList={articleList} />
            </div>
          </MainContainer>
          {/* </NewsContext.Provider> */}
        </AppContainer>
      </ThemeProvider>
    </>
  )
}


export default App
