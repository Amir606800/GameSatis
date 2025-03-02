import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import supabase from "../../helpers/supabaseClient"


const fetchProduct = createAsyncThunk(
    "fetchProduct",async(_,{rejectWithValue})=>{
        const {data,error} = await supabase.from("products").select("*")
        if(!error) return data
        else return rejectWithValue(error.message)
    })

const fetchUserProducts = createAsyncThunk(
    "fetchUserProducts",async (user_id,{rejectWithValue})=>{
        const {data,error} = await supabase.from("products").select("*, profiles (*)").eq("profile_id",user_id);
        if(!error) return data
        else return rejectWithValue(error.message)
    }
)

const addProduct = createAsyncThunk(
    "addProduct",async(addedProduct,{rejectWithValue})=>{
        const {data,error} = await supabase.from("products").insert(addedProduct)
        if(!error) return data
        return rejectWithValue(error.message)
    }
)

const deleteProduct = createAsyncThunk(
    "deleteProduct",async(product_id, {rejectWithValue})=>{
        const {error} = await supabase.from("products").delete().eq("id",product_id)
        if(!error) return product_id
        return rejectWithValue(error)
    }
)

const updateProduct = createAsyncThunk(
    "updateProduct",async(item,{rejectWithValue})=>{
        const {data,error} =await supabase.from("products").update({...item,last_modified: new Date().toISOString()}).eq("id",item.id).select()
        if(!error) return data[0]
        return rejectWithValue(error)
    }
)
const initialState = {
    products:[],
    userProducts:[],
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

        //Fetching a User products

        .addCase(fetchUserProducts.pending,(state)=>{
            state.loading = true
        })
        .addCase(fetchUserProducts.fulfilled,(state,action)=>{
            state.loading = false
            state.userProducts = action.payload
        })
        .addCase(fetchUserProducts.rejected,(state,action)=>{
            state.loading = true
            state.error = action.error
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

        //DeletingProduct
        .addCase(deleteProduct.pending,(state)=>{
            state.loading = true
        })
        .addCase(deleteProduct.fulfilled,(state,action)=>{
            state.loading = false;
            state.products = state.products.filter((product)=>product.id !== action.payload.id)
        })
        .addCase(deleteProduct.rejected,(state,action)=>{
            state.loading = true
            state.error = action.payload
        })

        //UpdatingProduct
        .addCase(updateProduct.pending,(state)=>{
            state.loading = true
        })
        .addCase(updateProduct.fulfilled,(state,action)=>{
            state.loading = false;
            state.products = state.products.map((product)=>product.id === action.payload.id ? action.payload:product)
            
        })
        .addCase(updateProduct.rejected,(state,action)=>{
            state.loading = true
            state.error = action.payload
        })
    }
})

export default ProductSlicer.reducer
export {fetchProduct,addProduct,fetchUserProducts,deleteProduct,updateProduct}