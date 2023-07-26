import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SystemState {
    isEverything: boolean
    isSideBarOpen: boolean

}

const initialState: SystemState = {
    isEverything: true,
    isSideBarOpen: false

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
    }
})


const { actions, reducer } = systemSlice

export const { setIsEverything, setIsSideBarOpen } = actions

export default reducer