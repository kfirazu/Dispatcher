import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Article } from '../../models/article-interface'
import { fetchArticles } from '../thunks/fetchDataThunk'

enum Status {
    IDLE = 'idle',
    LOADING = 'loading',
    SUCCEEDED = 'succeeded',
    FAILED = 'failed'
}

export interface FilterState {
    articleList: Article[]
    status: Status
    error: string | null

}

const initialState: FilterState = {
    articleList: [],
    status: Status.IDLE,
    error: null

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
    }

})

// Action creators are generated for each case reducer function

const { actions, reducer } = newsSlice

export const { setInitialArticleList, updateArticleList } = actions

export default reducer