import { configureStore } from "@reduxjs/toolkit";
import UseReducer from "../features/counter/counterSlice";



export const store = configureStore({
    reducer:{
        user: UseReducer
        
    }
})