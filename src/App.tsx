import theme from './styles/theme'
import { CssBaseline, ThemeProvider } from '@mui/material';
import AppHeader from './components/App-Header/app-header';
import { useEffect, useState } from 'react';
import SortBar from './components/Sort-Bar/sort-bar'
import FeedList from './components/FeedList/feed-list'
import newsData from './data/news.json'
import Dashboard from './components/Dashboard/dashboard'
// import { newsService } from './services/news.service'
// import { filterByInterface } from './models/filter-by-interface'
import { Article } from './models/article-interface'
import { AppContainer, MainContainer } from './styles/global-styles';
import useIsMobile from './hooks/useIsMobile';
import FilterBar from './components/Filter/filter-bar';
import { store } from './store/store';
import { Provider } from 'react-redux'

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

  const onOpenSideBar = () => {
    setIsSideBarOpen(true)
  }

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppContainer>
            <AppHeader />
            {IsEverything ?
              <SortBar onOpenSideBar={onOpenSideBar} />
              : <FilterBar onOpenSideBar={onOpenSideBar} />
            }
            <MainContainer isMobile={isMobile}>
              <div style={{ borderTop: '1px solid #D9DBE9', display: 'flex' }}>
                <FeedList articleList={articleList} />
                <Dashboard articleList={articleList} />
              </div>
            </MainContainer>
          </AppContainer>
        </ThemeProvider>
      </Provider>
    </>
  )
}



export default App
