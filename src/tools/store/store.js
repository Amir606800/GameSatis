import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Slices/UserProductSlice";
import CartReducer from "../Slices/CartSlice"
import OrdersReducer from "../Slices/OrdersSlice"
import FeedbacksReducer from "../Slices/FeedbackSlice"
import WhislistReducer from "../Slices/WhishListSlice"
const store = configureStore({
    reducer:{
        products:ProductReducer,
        cart:CartReducer,
        orders:OrdersReducer,
        feedbacks:FeedbacksReducer,
        wishlist:WhislistReducer
    }
})

export default store