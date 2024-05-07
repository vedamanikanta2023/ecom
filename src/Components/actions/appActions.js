import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn:false,
    loginToken:""
}

const appSlice = createSlice({
    name:"App",
    initialState,
    reducers:{
        app:(state,action)=>{
            state.isLoggedIn=action.payload;
        }
    }
});

export const appReducer = appSlice.reducer;

export const {app} = appSlice.actions;
