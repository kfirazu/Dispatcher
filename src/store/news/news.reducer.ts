import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FilterState {
    type?: 'everything' | 'top-headlines'
    country?: string
    source?: string
    category?: string
    keyword?: string
}

const initialState: FilterState = {
    type: 'everything',
    country: '',
    source: '',
    category: '',
    keyword: ''
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {

    },
})

// Action creators are generated for each case reducer function

const { actions, reducer } = newsSlice

export const { } = actions

export default reducer