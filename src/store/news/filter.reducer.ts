import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { DropdownOption, FilterBy } from '../../models/filter-by'

export interface FilterState {
    filterBy: FilterBy,
    searchQuery: string

}

const initialState: FilterState = {
    filterBy: {
        type: {
            title: 'Top-headlines', value: '', options: [
                { value: 'Everything', title: 'Everything', },
                { value: 'Top-headlines', title: 'Top Headlines', }]
        },
        country: { title: 'Country', value: '', options: [] },
        source: { title: 'Sources', value: '', options: [] },
        category: { title: 'Category', value: '', options: [] },
        language: { title: 'Languages', value: '', options: [] },
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
        setFilterCountries: (state, action: PayloadAction<DropdownOption[]>) => {
            state.filterBy.country.options = action.payload
            // console.log('state.filterBy.country.options:', state.filterBy.country.options)
        },
        setFilterSourcesOptions: (state, action: PayloadAction<DropdownOption[]>) => {
            state.filterBy.source.options = action.payload
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload
        },
        setFilterLanguageOptions: (state, action: PayloadAction<DropdownOption[]>) => {
            state.filterBy.language.options = action.payload
        },


    },

})


const { actions, reducer } = FilterSlice

export const { updateFilterBy, setFilterCountries, setSearchQuery, setFilterSourcesOptions, setFilterLanguageOptions } = actions

export default reducer