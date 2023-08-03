import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { DateOptions, DropdownOption, FilterBy } from '../../models/filter-by'
import { FilterOptions } from '../../services/news.service'
import { getIPAddress } from '../thunks/fetchDataThunk'
import { defaultCountry } from '../../constants/constants'

export interface FilterState {
    filterBy: FilterBy,
    searchQuery: string
    everythingSources: DropdownOption[]
    currArticlesSources: DropdownOption[]
    mobileSideBarType: string

}

interface FilterOptionPayload {
    title: string
    value: string
}

const initialState: FilterState = {
    filterBy: {
        type: FilterOptions.TOP_HEADLINES,
        country: 'il',
        source: '',
        category: '',
        language: '',
        sortBy: '',
        dates: { from: '', to: '' },

    },
    searchQuery: '',
    everythingSources: [],
    currArticlesSources: [],
    mobileSideBarType: ''
}

export const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updateFilterBy: (state, action: PayloadAction<FilterOptionPayload>) => {
            const { title, value } = action.payload
            const newState = { ...state, filterBy: { ...state.filterBy, [title]: value } }

            if (state.filterBy.type === FilterOptions.TOP_HEADLINES && title !== 'country') {
                newState.filterBy.country = ''
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
                state.filterBy.dates = { from: '', to: '' }
            }
        },
        setSearchQuery: (state: FilterState, action: PayloadAction<string>) => {
            state.searchQuery = action.payload
            if (action.payload !== '') {
                state.filterBy.country = ''
            }
        },
        setEverythingSources: (state, action: PayloadAction<DropdownOption[]>) => {
            state.everythingSources = action.payload
        },
        setCurrArticlesSources: (state, action: PayloadAction<DropdownOption[]>) => {
            state.currArticlesSources = action.payload
        },
        updateFilterByDates: (state, action: PayloadAction<DateOptions>) => {
            state.filterBy = {
                ...state.filterBy,
                dates: {
                    from: action.payload.from,
                    to: action.payload.to
                }
            }
        },
        setMobileSideBarType: (state, action: PayloadAction<string>) => {
            state.mobileSideBarType = action.payload
        },
        clearFilter: (state) =>  {
            state.filterBy = initialState.filterBy
        },
    },
    extraReducers: {
        [getIPAddress.fulfilled.type]: (state, action: PayloadAction<string>) => {
            console.log('action.payload fullfiled:', action.payload)
            state.filterBy.country = action.payload
        },
        [getIPAddress.rejected.type]: (state) => {
            state.filterBy.country = defaultCountry.value;
        },
    },
})



const { actions, reducer } = FilterSlice

export const {
    updateFilterBy, setSearchQuery,
    setFilterType, setEverythingSources,
    setCurrArticlesSources, updateFilterByDates,
    setMobileSideBarType, clearFilter } = actions

export default reducer
