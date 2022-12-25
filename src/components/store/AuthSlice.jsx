import { createSlice } from "@reduxjs/toolkit";

const AuthSlice=createSlice ({
    name :"auth",
    initialState:{
        isLoggedIn:false,
        name : 'yassine Roummani'
    },
    reducer:{
        // logInOut:(state)=>{
        //     state.isLoggedIn = !state.isLoggedIn;

        // },
    },
});

export const {logInOut}=AuthSlice.actions;
export default AuthSlice.reducer;