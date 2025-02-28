import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Slices/UserProductSlice";

const store = configureStore({
    reducer:{
        products:ProductReducer
    }
})

export default store