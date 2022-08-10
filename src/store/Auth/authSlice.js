import { createSlice } from "@reduxjs/toolkit"
import { loginWithFirebase } from "./thunks"

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: null,
        status: "idle",
        error: null,
        isLoading: false
    },
    reducers: {
        ResetStatus: (state) => {
          state.status = "idle"
          state.error = null
        }
    },
    extraReducers: {
        [loginWithFirebase.fulfilled.type]: (state, action) => {
            state.isLoggedIn = action.payload
            state.isLoading = false
            state.error = null
            state.status = "success"
        },
        [loginWithFirebase.pending.type]: (state, action) => {
            state.isLoading = true
            state.status = "pending"
            
        },
        [loginWithFirebase.rejected.type]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
            state.status = "failed"
        }
    }
})

export const {ResetStatus} = authSlice.actions
export default authSlice.reducer