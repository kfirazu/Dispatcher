import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './store/store';
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 1000 * 30,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>

      <App />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}

    </QueryClientProvider>

  </Provider>

)
