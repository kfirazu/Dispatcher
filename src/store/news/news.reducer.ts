import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Article } from '../../models/article-interface'
import { fetchArticles, fetchArticlesBySearchQuery } from '../thunks/fetchDataThunk'

export enum Status {
    IDLE = 'idle',
    LOADING = 'loading',
    SUCCEEDED = 'succeeded',
    FAILED = 'failed'
}

export interface NewsState {
    articleList: Article[]
    status: Status
    error: string | null
    page: number

}

const initialState: NewsState = {
    articleList: [],
    status: Status.IDLE,
    error: null,
    page: 1

}
export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setInitialArticleList: (state, action: PayloadAction<Article[]>) => {
            state.articleList = action.payload
        },
        updateArticleList: (state, action: PayloadAction<Article[]>) => {
            state.articleList = [...state.articleList, ...action.payload]
        },
        setArticleList: (state, action: PayloadAction<Article[]>) => {
            state.articleList = action.payload
        },
        incrementPage(state) {
            state.page = state.page + 1
        },



    },
    extraReducers: builder => {
        builder.addCase(fetchArticles.fulfilled, (state, action) => {
            state.articleList = [...action.payload]
            state.status = Status.SUCCEEDED
            state.error = null
        })
        builder.addCase(fetchArticles.pending, state => {
            state.status = Status.LOADING
        })
        builder.addCase(fetchArticles.rejected, (state, action) => {
            state.error = action.error.message || null
            state.status = Status.FAILED
        })
        builder.addCase(fetchArticlesBySearchQuery.fulfilled, (state, action) => {
            if (action.payload !== '') {
                state.articleList = [...action.payload]
                state.status = Status.SUCCEEDED
                state.error = null
            }
        })
        builder.addCase(fetchArticlesBySearchQuery.pending, state => {
            state.status = Status.LOADING
        })
        builder.addCase(fetchArticlesBySearchQuery.rejected, (state, action) => {
            state.error = action.error.message || null
            state.status = Status.FAILED
        })

    }
})

// Action creators are generated for each case reducer function

const { actions, reducer } = newsSlice

export const { setInitialArticleList, updateArticleList, setArticleList, incrementPage } = actions

export default reducer