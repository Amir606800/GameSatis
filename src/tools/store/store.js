import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Slices/UserProductSlice";
import CartReducer from "../Slices/CartSlice"
import OrdersReducer from "../Slices/OrdersSlice"

const store = configureStore({
    reducer:{
        products:ProductReducer,
        cart:CartReducer,
        orders:OrdersReducer
    }
})

export default store