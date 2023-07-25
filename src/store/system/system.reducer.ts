import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SystemState {
    isEverything: boolean
    isSideBarOpen: boolean

}

const initialState: SystemState = {
    isEverything: false,
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
            console.log(action.payload)
            state.isSideBarOpen = action.payload
        },
    }
})


// Action creators are generated for each case reducer function

const { actions, reducer } = systemSlice

export const { setIsEverything, setIsSideBarOpen } = actions

export default reducer