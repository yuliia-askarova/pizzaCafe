
import { createSlice } from "@reduxjs/toolkit";
import fetchDrinksAsync from "./fetchDrinksSliceAsync";


const drinksSlice = createSlice({
  name: "drinks",
  initialState: {
    drinks: [],
    loading: false,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDrinksAsync.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchDrinksAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.drinks = action.payload;
    });
    builder.addCase(fetchDrinksAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// export const { getAllPizzas } = pizzaSlice.actions;
export default drinksSlice.reducer;