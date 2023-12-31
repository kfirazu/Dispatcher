import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface RecentSearchState {
    recentSearches: { id: string, searchTerm: string }[]
}

const initialState: RecentSearchState = {
    recentSearches: [],


}

export const recentSearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addRecentSearch: (state, action: PayloadAction<{ id: string, searchTerm: string }>) => {
            // if (state.recentSearches.includes(action.payload)) {
            // Delete the old one and put the new one on top of the list
            if (state.recentSearches.length >= 3) {
                state.recentSearches.pop()
                state.recentSearches.unshift(action.payload)
            } else {
                state.recentSearches.unshift(action.payload)
            }
            // }
        },
        removeRecentSearch: (state, action: PayloadAction<string>) => {
            state.recentSearches = state.recentSearches.filter((item) => item.id !== action.payload);


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