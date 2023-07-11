import styled from 'styled-components'
import theme from './styles/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import AppHeader from './components/App-Header/app-header';
import { useEffect, useState } from 'react';
import { mockArticle, newsService } from './services/news.service';
import ArticlePreview from './components/Article-Preview/article-preview';
import { Article } from './models/article-interface';
// import Filter from './components/Filter/filter';

function App() {

  //Temporary to fetch mock data
  const [news, setNews] = useState<any>()
  const article: Article = mockArticle
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


  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer>
          <AppHeader />
          <MainContainer>
            {/* <Filter /> */}
            <ArticlePreview article={article} />
          </MainContainer>
        </AppContainer>
      </ThemeProvider>

    </>
  )
}

const AppContainer = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
min-width: 100vw
`
const MainContainer = styled.main`
flex: 1;
background-color: #F3F3FF;
width: 100%;

`

export default App
