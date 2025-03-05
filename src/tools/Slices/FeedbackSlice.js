import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import supabase from "../../helpers/supabaseClient"

const initialState = {
    feedbacks:[],
    loading:true,
    error:null
}

const fetchFeedbacks = createAsyncThunk(
    'fetchFeed',async (user_id,{rejectWithValue})=>{
        const {data,error} = await supabase.from("feedbacks").select("*,products(*,profiles(*))").eq("profile_id",user_id)
        if(!error) return data
        return rejectWithValue(error)
    }
)

const editFeedback = createAsyncThunk(
    'editThunk',async({feed_id,content},{rejectWithValue})=>{
        const {data,error} = await supabase.from("feedbacks").update({"content":content}).eq("id",feed_id)
        if(!error) return {feed_id:feed_id,content:content}
        return rejectWithValue(error)
    }
)
const addFeedback = createAsyncThunk(
    "addFeedback",async({item,userProfile,commentValues},{rejectWithValue})=>{
        const { data,error } = await supabase
      .from("feedbacks")
      .insert({
        profile_id: userProfile.id,
        product_id: item.products.id,
        content: commentValues.comment,
        rate: commentValues.rating,
      }).select("*");
      if(!error) return data
      return rejectWithValue(error)
    }
)
const FeedbacksSlice = createSlice({
    name:"feedbacSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchFeedbacks.pending,(state)=>{
            state.loading = false
        })
        .addCase(fetchFeedbacks.fulfilled,(state,action)=>{
            state.feedbacks = action.payload
            state.loading = false
        })
        .addCase(fetchFeedbacks.rejected,(state,action)=>{
            state.loading = true
            state.error = action.payload
        })
        // add Feedback
        .addCase(addFeedback.pending,(state)=>{
            state.loading = false
        })
        .addCase(addFeedback.fulfilled,(state,action)=>{
            state.feedbacks = [...state.feedbacks,action.payload]
            state.loading = false
        })
        .addCase(addFeedback.rejected,(state,action)=>{
            state.loading = true
            state.error = action.payload
        })
    }
})

export default FeedbacksSlice.reducer

export {fetchFeedbacks,addFeedback}