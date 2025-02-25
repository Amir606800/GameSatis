import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import supabase from "../../helpers/supabaseClient"

const fetchMainCategory = createAsyncThunk(
    'fetchMainCategory',async ()=>{
        const {data,error} = await supabase.from("categories").select("*").is("parent_id",null)
        if(!error) return data
        else{
            console.log(error)
        }
    }
)

const fetchSubCategory = createAsyncThunk(
    'fetchSubCategory',async(category_id)=>{
        const {data,error} = await supabase.from("categories").select("*").eq("parent_id",category_id)
        if(!error) return data;
        else{
            console.log(error)
        }
    }
)

const initialState = {
    categories:[],
    loading:true,
    error:null
}

const CategorySlicer = createSlice({
    name:"categoryary",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchMainCategory.pending,(state)=>{
            state.loading = true
        })
        .addCase(fetchMainCategory.fulfilled,(state,action)=>{
            state.categories = action.payload;
            state.loading = false
        })
        .addCase(fetchMainCategory.rejected,(state,action)=>{
            state.error = action.error.message
        })
        .addCase(fetchSubCategory.pending, (state)=>{
            state.loading = true
        })
        .addCase(fetchSubCategory.fulfilled,(state,action)=>{
            state.categories = action.payload
            state.loading = false
        })
        .addCase(fetchSubCategory.rejected,(state,action)=>{
            state.error = action.error.message
        })
    }
})
export default CategorySlicer.reducer
export {fetchMainCategory,fetchSubCategory}