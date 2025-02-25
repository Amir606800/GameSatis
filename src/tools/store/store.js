import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "../Slices/CategorySlice";

const store = configureStore({
    reducer:{
        categories:CategoryReducer
    }
})

export default store