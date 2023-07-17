import styled from 'styled-components'
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

function App() {

  //Temporary to fetch mock data
  const [articleList, setArticleList] = useState<Article[]>([])
  const [IsEverything, setIsEverything] = useState(false)

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
              <SortBar />
              : <Filter />
            }
            <MainContainer>
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

const AppContainer = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
min-width: 100vw;
background-color: #F3F3FF;
`
const MainContainer = styled.main`
// flex: 1;
display: flex;
// background-color: #F3F3FF;
height: calc(100vh - 74px);
width: 100%;
padding: 20px;
margin-top: 20px;

`

export default App
