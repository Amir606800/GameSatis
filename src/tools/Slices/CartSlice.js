import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import supabase from "../../helpers/supabaseClient"

const initialState = {
    cart:[],
    loading:true,
    error:null
}

const fetchCart = createAsyncThunk(
    "fetchCart",async(user_id,{rejectWithValue})=>{
        const {data,error} = await supabase.from("cart").select("*,products(image_url,price,title,discount,profiles(profile_photo,display_name,id))").eq("user_id",user_id)
        if(!error) return data
        return rejectWithValue(error)
    }
)

const addCart = createAsyncThunk(
    "addCart", async (item, {rejectWithValue})=>{
        
        const {data,error} = await supabase.from("cart").insert(item)
        if(!error) return data[0]
        return rejectWithValue(error)
    }
)

const deleteCart = createAsyncThunk(
    "deleteCart",async (cart_id,{rejectWithValue})=>{
        const {error} = await supabase.from("cart").delete().eq("id",cart_id);
        if(!error) return cart_id;
        return rejectWithValue(error)
    }
)

const changeQuan = createAsyncThunk(
    "changingQuantity",async ({id,quantity,type},{rejectWithValue})=>{
        const {error} = await supabase.from("cart").update({"quantity":type=="decrease"?quantity-1:quantity+1}).eq("id",id)
        if(error) return rejectWithValue(error)
        return {id,quantity,type}
    }
)

const resetCart = createAsyncThunk(
    'resetCart',async (user_id,{rejectWithValue})=>{
        const {error} = await supabase.from("cart").delete().eq("user_id",user_id)
        if(error) return rejectWithValue(error)
    }
)



const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        //fetching the categories
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

        //adding an item to cart
        .addCase(addCart.pending,(state)=>{
            state.loading = true
        })
        .addCase(addCart.fulfilled,(state,action)=>{
            state.loading = false
            state.cart = [...state.cart,action.payload]
        })
        .addCase(addCart.rejected,(state,action)=>{
            state.loading = true
            state.error = action.payload
        })

        //deleting an item from cart
        .addCase(deleteCart.pending,(state)=>{
            state.loading = true
        })
        .addCase(deleteCart.fulfilled,(state,action)=>{
            state.loading = false
            state.cart = state.cart.filter((item)=>item.id !== action.payload)
        })
        .addCase(deleteCart.rejected,(state,action)=>{
            state.loading = true
            state.error = action.payload
        })
        //decrease an item from cart
        .addCase(changeQuan.pending,(state)=>{
            state.loading = true
        })
        .addCase(changeQuan.fulfilled,(state,action)=>{
            state.loading = false
            const found = state.cart.find((item)=>item.id == action.payload.id)
            if(found){
                if(action.payload.type === "decrease"){
                    found.quantity = action.payload.quantity-1
                }
                else if(action.payload.type === "increase"){
                    found.quantity = action.payload.quantity+1
                }
            }
        })
        .addCase(changeQuan.rejected,(state,action)=>{
            state.loading = true
            state.error = action.payload
        })
        
        //reset Cart
        .addCase(resetCart.fulfilled,(state)=>{
            state.cart = []
        })
        .addCase(resetCart.rejected,(state,action)=>{
            state.error = action.payload
        })
    }
})

export default CartSlice.reducer

export {fetchCart,addCart,deleteCart,changeQuan,resetCart}