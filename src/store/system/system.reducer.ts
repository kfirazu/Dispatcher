import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SystemState {
    isEverything: boolean
    isSideBarOpen: boolean
    isLoading: boolean

}

const initialState: SystemState = {
    isEverything: false,
    isSideBarOpen: false,
    isLoading: false

}

export const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        setIsEverything: (state, action: PayloadAction<boolean>) => {
            state.isEverything = action.payload
        },
        setIsSideBarOpen: (state, action: PayloadAction<boolean>) => {
            state.isSideBarOpen = action.payload
        },
       
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
    }
})


const { actions, reducer } = systemSlice

export const { setIsEverything, setIsSideBarOpen ,setIsLoading} = actions

export default reducer