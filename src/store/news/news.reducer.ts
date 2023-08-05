import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Article } from '../../models/article-interface'
import { fetchArticles, fetchArticlesBySearchQuery } from '../thunks/fetchDataThunk'
import { NewsApiResponse } from '../../models/api-respone-interface'

export enum Status {
    IDLE = 'idle',
    LOADING = 'loading',
    SUCCEEDED = 'succeeded',
    FAILED = 'failed',
    OK = "ok"
}

export interface NewsState {
    articleList: Article[]
    status: string
    error: string | null
    page: number
    totalResults: number
    isNoData: boolean
    isFirstSearch: boolean


}

const initialState: NewsState = {
    articleList: [],
    status: Status.IDLE,
    error: null,
    page: 1,
    totalResults: -1,
    isNoData: false,
    isFirstSearch: true


}
export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setInitialArticleList: (state, action: PayloadAction<Article[]>) => {
            state.articleList = action.payload
        },
        updateArticleList: (state, action: PayloadAction<NewsApiResponse>) => {
            state.articleList = [...state.articleList, ...action.payload.articles]
            state.totalResults = action.payload.totalResults
        },
        setArticleList: (state, action: PayloadAction<Article[]>) => {
            state.articleList = action.payload
        },
        incrementPage(state) {
            state.page = state.page + 1
        },
        setTotalResults: (state, action: PayloadAction<number>) => {
            state.totalResults = action.payload
        },
        setIsNoData: (state, action: PayloadAction<boolean>) => {
            state.isNoData = action.payload
        },
        setIsFirstSearch(state) {
            const updateState = { ...state, isFirstSearch: false };
            return updateState;
        },



    },
    extraReducers: builder => {
        builder.addCase(fetchArticles.fulfilled, (state, action: PayloadAction<NewsApiResponse>) => {
            if (action.payload === undefined) {
                console.log(" action.payload is undefined so i cannot spread it!")
                state.articleList = state.articleList
                state.status = Status.SUCCEEDED
                console.log('state.status:', state.status)
            }
            if (action.payload !== undefined) {
                state.articleList = [...action.payload?.articles]
                state.status = action.payload.status
                state.error = null
            }
        })
        builder.addCase(fetchArticles.pending, state => {
            state.status = Status.LOADING
        })
        builder.addCase(fetchArticles.rejected, (state, action) => {
            state.error = action.error.message || null
            state.status = Status.FAILED
        })
        builder.addCase(fetchArticlesBySearchQuery.fulfilled, (state, action: PayloadAction<NewsApiResponse>) => {
            if (action.payload.status === Status.OK) {
                state.articleList = [...action.payload.articles]
                state.totalResults = action.payload.totalResults
                state.status = Status.SUCCEEDED
                state.error = null
            } else {
                console.log('status in reducer not ok:', action.payload.status)
                state.totalResults = action.payload.totalResults
                state.status = Status.SUCCEEDED;
                state.articleList = [];
                state.error = null;

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

export const { setInitialArticleList, updateArticleList, setArticleList, incrementPage, setIsNoData, setTotalResults, setIsFirstSearch } = actions

export default reducer