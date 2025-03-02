import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import supabase from "../../helpers/supabaseClient"

const initialState = {
    cart:[],
    loading:true,
    error:null
}

const fetchCart = createAsyncThunk(
    "fetchCart",async(user_id,{rejectWithValue})=>{
        const {data,error} = await supabase.from("cart").select("*,products(image_url,price,title,profiles(profile_photo,display_name))").eq("user_id",user_id)
        if(!error) return data
        return rejectWithValue(error)
    }
)

const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCart.pending,(state)=>{
            state.loading = true
        })
        .addCase(fetchCart.fulfilled,(state,action)=>{
            state.loading=false
            state.cart = action.payload
        })
        .addCase(fetchCart.rejected,(state,action)=>{
            state.loading = true
            state.error = action.payload
        })
    }
})

export default CartSlice.reducer

export {fetchCart}