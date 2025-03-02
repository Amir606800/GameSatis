import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Slices/UserProductSlice";
import CartReducer from "../Slices/CartSlice"

const store = configureStore({
    reducer:{
        products:ProductReducer,
        cart:CartReducer
    }
})

export default store