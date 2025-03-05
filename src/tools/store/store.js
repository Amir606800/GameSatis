import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Slices/UserProductSlice";
import CartReducer from "../Slices/CartSlice"
import OrdersReducer from "../Slices/OrdersSlice"
import FeedbacksReducer from "../Slices/FeedbackSlice"
const store = configureStore({
    reducer:{
        products:ProductReducer,
        cart:CartReducer,
        orders:OrdersReducer,
        feedbacks:FeedbacksReducer
    }
})

export default store