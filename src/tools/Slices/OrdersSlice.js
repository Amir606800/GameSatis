import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../helpers/supabaseClient";

const initialState = {
  orders: [],
  loading: true,
  error: null,
};

const fetchOrders = createAsyncThunk(
  "fetchOrders",
  async (user_id, { rejectWithValue }) => {
    const { data, error } = await supabase
      .from("orders")
      .select("*,products(*,profiles(*))")
      .eq("user_id", user_id);
    if (!error) return data;
    return rejectWithValue(error);
  }
);

const addOrders = createAsyncThunk(
  "addOrders",
  async ({ cart }, { rejectWithValue }) => {
    const orders = [];
    try {
      for (const item of cart) {
        const newOrder = {
          product_id: item.product_id,
          user_id: item.user_id,
          total: item.quantity * item.products.price,
          quantity: item.quantity,
        };
        const { error } = await supabase.from("orders").insert(newOrder);
        if (error) return rejectWithValue(error);
        orders.push(newOrder);
      }
    } catch (err) {
      console.log(err);
      return orders;
    }
  }
);

const OrdersSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //Add order to the orders
      .addCase(addOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(addOrders.fulfilled, (state, action) => {
        state.loading = false;
        for (const item in action.payload) {
          state.orders.push(item);
        }
      })
      .addCase(addOrders.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default OrdersSlice.reducer;
export { fetchOrders, addOrders };
