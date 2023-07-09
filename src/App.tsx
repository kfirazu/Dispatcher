import styled from 'styled-components'
import CustomDropdown from './components/Dropdown/custom-dropdown'
import theme from './styles/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import AppHeader from './components/App-Header/app-header';
import { useEffect, useState } from 'react';
import { mockArticle, newsService } from './services/news.service';
import ArticlePreview from './components/Article-Preview/article-preview';
import { Article } from './models/article-interface';

function App() {

  //Temporary to fetch mock data
  const [news, setNews] = useState<any>()
  const article: Article = mockArticle
  const category = [
    { value: 'business', name: 'Business' },
    { value: 'entertainment', name: 'Entertainment' },
    { value: 'general', name: 'General' },
    { value: 'health', name: 'Health' },
    { value: 'science', name: 'Science' },
    { value: 'sports', name: 'Sports' },
    { value: 'technology', name: 'Technology' }

  ]
  useEffect(() => {
    ; (async () => {
      try {
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
            <CustomDropdown children={category} label={'Country'} id='category' labelId='category' />
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
