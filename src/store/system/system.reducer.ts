import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SystemState {
    isEverything: boolean
    isSideBarOpen: boolean
    isNoData: boolean

}

const initialState: SystemState = {
    isEverything: false,
    isSideBarOpen: false,
    isNoData: false

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
        setIsNoData: (state, action: PayloadAction<boolean>) => {
            state.isNoData = action.payload
        },
    }
})


const { actions, reducer } = systemSlice

export const { setIsEverything, setIsSideBarOpen, setIsNoData } = actions

export default reducer