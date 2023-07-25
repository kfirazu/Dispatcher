import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { FilterBy } from '../../models/filter-by'

export interface FilterState {
    filterBy: FilterBy,
    searchQuery: string

}

const initialState: FilterState = {
    filterBy: {
        type: { title: 'Everything', value: 'everything', options: ['Everything', 'Top-Headlines'] },
        country: { title: 'Country', value: '', options: [] },
        source: { title: 'Sources', value: '', options: [] },
        category: { title: 'Category', value: '', options: [] },
        languages: { title: 'Langugaes', value: '', options: [] },
    },
    searchQuery: ''
}

export const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updateFilterBy: (state, action: PayloadAction<FilterBy>) => {
            console.log('action', action.payload)
            state.filterBy = { ...state.filterBy, ...action.payload }
        },
        updateSource: (state, action: PayloadAction<string[]>) => {
            state.filterBy.source.options = action.payload
        },
        updateSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload
        },


    },
})

// Action creators are generated for each case reducer function

const { actions, reducer } = FilterSlice

export const { updateFilterBy, updateSource, updateSearchQuery } = actions

export default reducer