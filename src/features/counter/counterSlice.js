import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
   users:[],

   loading:false
}


export const getAllcounrty = createAsyncThunk('users',
    async ()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        return response.data
    }
)


export const counterSlice = createSlice({
    name: 'user',
initialState,
reducers:{

},
extraReducers: (builder)=>{

    builder.addCase(getAllcounrty.fulfilled , (state , action)=>{
        state.users = action.payload
    })
}

})

export const {} = counterSlice.actions

export default counterSlice.reducer

