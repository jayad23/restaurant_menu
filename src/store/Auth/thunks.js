import { createAsyncThunk } from "@reduxjs/toolkit"
import { app, auth} from "./firebase"

export const loginWithFirebase = createAsyncThunk(
    "firebase",
    async(argument) => {
        try {
            const res = auth.loginWithFirebase(argument)
            return res
        } catch (error) {
            return error
        }
    }
)