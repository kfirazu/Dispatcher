import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { DropdownOption, FilterBy } from '../../models/filter-by'
import { FilterOptions } from '../../services/news.service'

export interface FilterState {
    filterBy: FilterBy,
    searchQuery: string
    everythingSources: DropdownOption[]
    currArticlesSources: DropdownOption[]
}

interface FilterOptionPayload {
    title: string
    value: string
}

const initialState: FilterState = {
    filterBy: {
        type: FilterOptions.TOP_HEADLINES,
        country: 'us',
        source: '',
        category: '',
        language: '',
        sortBy: ''

    },
    searchQuery: '',
    everythingSources: [],
    currArticlesSources: []
}

export const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updateFilterBy: (state, action: PayloadAction<FilterOptionPayload>) => {
            const { title, value } = action.payload;
            const newState = { ...state, filterBy: { ...state.filterBy, [title]: value } };

            if (state.filterBy.type === FilterOptions.TOP_HEADLINES && title !== 'country') {
                newState.filterBy.country = '';
            }

            return newState;

        },
        setFilterType: (state, action: PayloadAction<FilterOptionPayload>) => {
            state.filterBy.type = action.payload.value
            if (action.payload.value === "Everything") {
                state.filterBy.country = ''
                state.filterBy.category = ''
                state.filterBy.source = ''
            }
            if (action.payload.value === "Top-headlines") {
                state.filterBy.language = ''
                state.filterBy.sortBy = ''
                state.filterBy.source = ''
            }
        },
        setSearchQuery: (state: FilterState, action: PayloadAction<string>) => {
            state.searchQuery = action.payload
        },
        setEverythingSources: (state, action: PayloadAction<DropdownOption[]>) => {
            state.everythingSources = action.payload
        },
        setCurrArticlesSources: (state, action: PayloadAction<DropdownOption[]>) => {
            state.currArticlesSources = action.payload
        },

    }
})



const { actions, reducer } = FilterSlice

export const { updateFilterBy, setSearchQuery, setFilterType, setEverythingSources, setCurrArticlesSources } = actions

export default reducer
