// ** Reducers Imports
import layout from "./layout"
import navbar from "./navbar"
import authSlice from "../store/Auth/authSlice"

const rootReducer = { 
    navbar, 
    layout,
    authentication: authSlice
 }

export default rootReducer
