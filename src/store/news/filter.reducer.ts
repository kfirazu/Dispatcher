import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { DateOptions, DropdownOption, FilterBy } from '../../models/filter-by'
import { FilterOptions, newsService } from '../../services/news.service'
import { getIPAddress } from '../thunks/fetchDataThunk'
import { defaultCountry } from '../../constants/constants'

export interface FilterState {
    filterBy: FilterBy,
    searchQuery: string
    everythingSources: DropdownOption[]
    currArticlesSources: DropdownOption[]
    mobileSideBarType: string
    isFilterCleared: boolean
    isMobileDatePickerOpen: boolean

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
        from: undefined,
        to: undefined

    },
    searchQuery: '',
    everythingSources: [],
    currArticlesSources: [],
    mobileSideBarType: '',
    isFilterCleared: false,
    isMobileDatePickerOpen: false
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
            // console.log('action.payload.value:', action.payload.value)
            state.filterBy.type = action.payload.value
            if (action.payload.value === "everything") {
                state.filterBy.country = ''
                state.filterBy.category = ''
                state.filterBy.source = ''
            }
            if (action.payload.value === "top-headlines") {
                state.filterBy.language = ''
                state.filterBy.sortBy = ''
                state.filterBy.source = ''
                state.filterBy.from = undefined
                state.filterBy.to = undefined
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
        updateFilterByDates: (state, action: PayloadAction<DateOptions>) => {
            const { from, to } = action.payload
            // const formattedDates = newsService.formatFilterDates(from, to)
            // const { formattedStartDate, formattedEndDate } = formattedDates
            // console.log('formattedDates:', formattedDates)
            state.filterBy = {
                ...state.filterBy,
                from: from ? from : undefined,
                to: to ? to : undefined
            }
        },

        setMobileSideBarType: (state, action: PayloadAction<string>) => {
            state.mobileSideBarType = action.payload
        },
        clearFilter: (state) => {
            state.filterBy = initialState.filterBy
        },
        setIsFilterCleared: (state, action: PayloadAction<boolean>) => {
            state.isFilterCleared = action.payload
        },
        setIsMobileDatePickerOpen: (state, action: PayloadAction<boolean>) => {
            state.isMobileDatePickerOpen = action.payload
        }
    },
    extraReducers: {
        [getIPAddress.fulfilled.type]: (state, action: PayloadAction<string>) => {
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
    setMobileSideBarType, clearFilter, setIsFilterCleared,
    setIsMobileDatePickerOpen
} = actions

export default reducer
