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
            console.log('ARTICLE LIST UPDATING FROM UPDATE ARTICLE LIST IN NEWS REDUCER!!!')
            if(!state.articleList.length) {
                console.log('updatring')
            }
            state.status = action.payload.status
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
        setStatus: (state, action: PayloadAction<boolean>) => {
            if (action.payload === true) {
                state.status = Status.LOADING
            }
        }

    },
    extraReducers: builder => {

        builder.addCase(fetchArticles.pending, (state) => {
            state.status = Status.LOADING
        })
        builder.addCase(fetchArticles.fulfilled, (state, action: PayloadAction<NewsApiResponse>) => {
            // console.log('action.payload fetch articles:', action.payload)
            // console.log('ARTICLE LIST UPDATING FROM FULLFILLED IN REDUCER!!!')
            if (action.payload === undefined) {
                console.log(" action.payload is undefined so i cannot spread it!")
                state.articleList = state.articleList
                state.status = Status.SUCCEEDED
            }
            if (action.payload !== undefined) {
                if (!action.payload.articles) {
                    console.log('THERE ARE NO ARTICLES!! STATE>ARTICLELIST = []')
                    state.articleList = []
                    state.status = action.payload.status
                    state.totalResults = action.payload.totalResults
                } else {
                    console.log('GOT INTO ELSE IN FETCH ARTICLES FULLFILED')
                    // state.articleList = [...action.payload?.articles]
                    state.articleList = action.payload?.articles

                    state.status = action.payload.status
                    state.error = null
                }
            }
        })
        builder.addCase(fetchArticles.rejected, (state, action) => {
            state.error = action.error.message || null
            state.status = Status.FAILED
        })
        builder.addCase(fetchArticlesBySearchQuery.pending, state => {
            state.status = Status.LOADING
        })
        builder.addCase(fetchArticlesBySearchQuery.fulfilled, (state, action: PayloadAction<NewsApiResponse>) => {
            console.log('action.payload:', action.payload)
            if (action.payload.status === Status.OK) {
                state.articleList = [...action.payload.articles]
                state.totalResults = action.payload.totalResults
                state.status = Status.SUCCEEDED
                state.error = null
            } else {
                // console.log('status in reducer not ok:', action.payload.status)
                state.totalResults = action.payload.totalResults
                state.status = Status.SUCCEEDED;
                state.articleList = [];
                state.error = null;

            }

        })
        builder.addCase(fetchArticlesBySearchQuery.rejected, (state, action) => {
            state.error = action.error.message || null
            state.status = Status.FAILED
        })

    }
})

// Action creators are generated for each case reducer function

const { actions, reducer } = newsSlice

export const { setInitialArticleList, updateArticleList, setArticleList, incrementPage, setIsNoData, setTotalResults, setIsFirstSearch, setStatus } = actions

export default reducer