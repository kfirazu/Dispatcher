import theme from './styles/theme'
import { CssBaseline, ThemeProvider } from '@mui/material';
import AppHeader from './components/App-Header/app-header';
import { useEffect, useState } from 'react';
import SortBar from './components/Sort-Bar/sort-bar'
import FeedList from './components/FeedList/feed-list'
import newsData from './data/news.json'
import Dashboard from './components/Dashboard/dashboard'
import { Article } from './models/article-interface'
import { AppContainer, MainContainer } from './styles/global-styles';
import useIsMobile from './hooks/useIsMobile';
import FilterBar from './components/Filter/filter-bar';
import { useAppDispatch, useAppSelector } from './store/hooks.store';
import { newsService } from './services/news.service';
import { useQuery, QueryClient, useQueryClient, QueryClientProvider } from '@tanstack/react-query'
import { UseIsTablet } from './hooks/useIsTablet';
import { setInitialArticleList } from './store/news/news.reducer';


function App() {

  const isMobile = useIsMobile()
  const isTablet = UseIsTablet()
  const dispatch = useAppDispatch()
  const IsEverything = useAppSelector(state => state.system.isEverything)

  //Temporary to fetch mock data
  const [articleList, setArticleList] = useState<Article[]>([])
  const [news, setNews] = useState<any>({})

  const initArticle = useAppSelector(state => state.news.articleList)

  // Fetch Data
  // useEffect(() => {
  //   ; (async () => {
  //     try {
  //       const newsFeed = await newsService.query()
  //       setNews(newsFeed)

  //     } catch (err) {
  //       console.log('err from cmp', err)
  //     }
  //   })()
  // }, [])

  // Should load the data when the app is mounting and then put it in redux. 
  // redux should hold the articleListToDisplay


  // useEffect(() => {
  //   const fetchInitialData = async () => {
  //     const initialArticles = await newsService.fetchInitialArticles()
  //     dispatch(setInitialArticleList(initialArticles))
  //   }
  //   setArticleList(newsData.articles.slice(0, 10))
  //   fetchInitialData()
  // }, [])

  // Fetch initial articles using react-query
  const { data: initialArticles } = useQuery<Article[]>(["initialArticles"], newsService.fetchInitialArticles, {
    staleTime: 300000, // 5 minutes (how long the data is considered fresh)
  });

  // Set the initial articles to Redux store
  useEffect(() => {
    if (initialArticles) {
      setArticleList(initialArticles)
      dispatch(setInitialArticleList(initialArticles))
    }
  }, [dispatch, initialArticles]);

  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppContainer isMobile={isMobile} isTablet={isTablet}>
            <AppHeader />
            {/* <MyComponent /> */}
            {IsEverything ?
              <SortBar />
              : <FilterBar />
            }
            <MainContainer isMobile={isMobile} isTablet={isTablet}>
              <div style={{ borderTop: '1px solid #D9DBE9', display: 'flex' }}>
                <FeedList articleList={articleList} />
                <Dashboard articleList={articleList} />
              </div>
            </MainContainer>
          </AppContainer>
        </ThemeProvider>
      {/* </QueryClientProvider> */}

    </>
  )
}



export default App

// export const MyComponent = () => {

//   const { data: articles, isLoading } = useQuery({
//     queryKey: ['initialArticles'],
//     queryFn: newsService.fetchInitialArticles
//   });

//   console.log('articlesssss',articles)

//   if (isLoading) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <div>
//         {/* Your component content */}
//         {articles.map((article: any) => {
//           <div>{article.source}</div>
//         })}
//       </div>
//     );
//   }
// }
