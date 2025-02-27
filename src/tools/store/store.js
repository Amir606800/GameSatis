import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Slices/CategorySlice";

const store = configureStore({
    reducer:{
        products:ProductReducer
    }
})

export default store