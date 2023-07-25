import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { FilterBy } from '../../models/filter-by'

export interface FilterState {
    filterBy: FilterBy,
    searchQuery: string

}

const initialState: FilterState = {
    filterBy: {
        type: { title: 'top-headlines', value: 'top-headlines', options: ['Everything', 'Top-Headlines'] },
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
            state.filterBy = { ...state.filterBy, ...action.payload }
        },
        updateSource: (state, action: PayloadAction<string[]>) => {
            state.filterBy.source.options = action.payload
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload
        },


    },
   
})


const { actions, reducer } = FilterSlice

export const { updateFilterBy, updateSource, setSearchQuery } = actions

export default reducer