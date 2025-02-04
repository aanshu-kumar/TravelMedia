import { configureStore } from "@reduxjs/toolkit"
import postReducer from "./slices/postSlice"
import imageReducer from "./slices/userImage"

export const store = configureStore({
    reducer:{
        post: postReducer,
        userImage: imageReducer 
    }
})

