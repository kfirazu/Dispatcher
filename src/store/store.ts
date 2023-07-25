import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './news/filter.reducer'
import systemReducer from './system/system.reducer'
import newsReducer from './news/news.reducer'
import recentSearchReducer from './news/recent-serach.reducer'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    system: systemReducer,
    news: newsReducer,
    recentSearch: recentSearchReducer

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch