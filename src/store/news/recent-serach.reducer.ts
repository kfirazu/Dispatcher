import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface RecentSearchState {
    recentSearches: string[]

}

const initialState: RecentSearchState = {
    recentSearches: ['crypto', 'soccer', 'bibi']

}

export const recentSearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addRecentSearch: (state, action: PayloadAction<string>) => {
            if(state.recentSearches.includes(action.payload)) {
                // Delete the old one and put the new one on top of the list
            }
            state.recentSearches = [action.payload, ...state.recentSearches]
        },
        removeRecentSearch: (state, action: PayloadAction<string>) => {
            state.recentSearches = state.recentSearches.filter((recentSearch) => recentSearch !== action.payload)
        },
        clearRecentSearch: (state) => {
            state.recentSearches = []
        },
    },
})

// Action creators are generated for each case reducer function

const { actions, reducer } = recentSearchSlice

export const { addRecentSearch, removeRecentSearch, clearRecentSearch } = actions

export default reducer