import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import supabase from "../../helpers/supabaseClient"


const fetchProduct = createAsyncThunk(
    "fetchProduct",async(_,{rejectWithValue})=>{
        const {data,error} = await supabase.from("products").select("*")
        if(!error) return data
        else return rejectWithValue(error.message)
    })

const addProduct = createAsyncThunk(
    "addProduct",async(addedProduct,{rejectWithValue})=>{
        const {data,error} = await supabase.from("products").insert(addedProduct)
        if(!error) return data
        return rejectWithValue(error.message)
    }
)

const initialState = {
    products:[],
    loading:true,
    error:null
}

const ProductSlicer = createSlice({
    name:"productSlicer",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        //Fetching products
        .addCase(fetchProduct.pending,(state)=>{
            state.loading = true
        })
        .addCase(fetchProduct.fulfilled,(state,action)=>{
            state.loading = false;
            state.products = action.payload
        })
        .addCase(fetchProduct.rejected,(state,action)=>{
            state.loading = true
            state.error = action.payload
        })

        //Adding products
        .addCase(addProduct.pending,(state)=>{
            state.loading = true
        })
        .addCase(addProduct.fulfilled,(state,action)=>{
            state.loading = false;
            state.products = [...state.products,action.payload]
        })
        .addCase(addProduct.rejected,(state,action)=>{
            state.loading = true
            state.error = action.payload
        })
    }
})

export default ProductSlicer.reducer
export {fetchProduct,addProduct}