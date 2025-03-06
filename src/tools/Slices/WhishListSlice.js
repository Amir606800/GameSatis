import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import supabase from "../../helpers/supabaseClient"

const initialState = {
    wishes:[],
    loading:true,
    error:null
}

const fetchWish = createAsyncThunk(
    "fetchWish",async (user_id,{rejectWithValue})=>{
        const {data,error} = await supabase.from("wishlist").select("*,products(*,profiles(*))").eq("profile_id",user_id)
        if(!error) return data;
        return rejectWithValue(error)
    }
)

const addWish = createAsyncThunk(
    "addWish",async ({product_id,user_id},{rejectWithValue})=>{
        const {data,error} = await supabase.from("wishlist").insert({product_id:product_id,profile_id:user_id}).select("*")
        if(!error) return data[0]
        return rejectWithValue(error)
    }
)

const deleteWish = createAsyncThunk(
    "deleteWish",async (id,{rejectWithValue})=>{
        const {error} = await supabase.from("wishlist").delete().eq("id",id)
        if(!error) return id
        return rejectWithValue(error)
    }
)

const WhishlistSlice = createSlice({
    name:"Whishlist",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchWish.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchWish.fulfilled,(state,action)=>{
            state.loading = false;
            state.wishes = action.payload
        })
        .addCase(fetchWish.rejected,(state,action)=>{
            state.loading = true;
            state.error = action.payload
        })
        //adda
        .addCase(addWish.pending,(state)=>{
            state.loading = true;
        })
        .addCase(addWish.fulfilled,(state,action)=>{
            state.loading = false;
            state.wishes = [...state.wishes,action.payload]
        })
        .addCase(addWish.rejected,(state,action)=>{
            state.loading = true;
            state.error = action.payload
        })
        //delete
        .addCase(deleteWish.pending,(state)=>{
            state.loading = true;
        })
        .addCase(deleteWish.fulfilled,(state,action)=>{
            state.loading = false;
            state.wishes = state.wishes.filter((item)=>item.id != action.payload)
        })
        .addCase(deleteWish.rejected,(state,action)=>{
            state.loading = true;
            state.error = action.payload
        })
    }
    
})

export default WhishlistSlice.reducer
export {fetchWish,addWish,deleteWish}