import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Article } from '../../models/article-interface'

export interface FilterState {
    articleList: Article[]
}

const initialState: FilterState = {
    articleList: []
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setInitialArticleList: (state, action: PayloadAction<Article[]>) => {
            state.articleList = action.payload
        },
        updateArticleList: (state, action: PayloadAction<Article[]>) => {
            state.articleList = { ...state.articleList, ...action.payload }
        },

    },

})

// Action creators are generated for each case reducer function

const { actions, reducer } = newsSlice

export const { setInitialArticleList, updateArticleList } = actions

export default reducer