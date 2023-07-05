import styled from 'styled-components'
import CustomDropdown from './components/Dropdown/custom-dropdown'
import theme from './styles/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import AppHeader from './components/App-Header/app-header';
import { useEffect, useState } from 'react';
import { mockArticle, newsService } from './services/news.service';
import ArticlePreview, { Article } from './components/Article-Preview/article-preview';

function App() {

  //Temporary to fetch mock data
  const [news, setNews] = useState<any>()
  const article: Article = mockArticle
  const category = [
    'Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'
  ]
  useEffect(() => {
    ; (async () => {
      try {
        console.log('hello')
        const newsFeed = await newsService.query()
        setNews(newsFeed)
      } catch (err) {
        console.log('err from cmp', err)
      }
    })()
  }, [])

  const handleChange = () => {

  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer>
          <AppHeader />
          <MainContainer>
            <CustomDropdown children={category} label={'country'} id='category' handleChange={handleChange} />
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
