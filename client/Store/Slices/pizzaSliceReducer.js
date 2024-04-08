import { createSlice } from "@reduxjs/toolkit";
import fetchPizzaAsync from "./fetchPizzaSliceAsync";


const pizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    pizza: [],
    loading: false,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzaAsync.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPizzaAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.pizza = action.payload;
    });
    builder.addCase(fetchPizzaAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default pizzaSlice.reducer;
