import { configureStore } from "@reduxjs/toolkit";
import books from './bookSlice';
import auth from './AuthSlice'
export default configureStore({
    reducer:{
        books,
        auth
    }
})