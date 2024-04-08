import { createSlice } from "@reduxjs/toolkit";

const modalSlicer = createSlice({
  name: "modal",
  initialState: {
    isBasketOpen: false,
    isOrderOpen: false

  },
  reducers: {
    setModalBasketOpen: (state, action) => {
        return {
            ...state,
            isBasketOpen: !state.isBasketOpen
        };
    
    },

    setModalOrderOpen: (state, action) => {
      return {
          ...state,
          isOrderOpen: !state.isOrderOpen
      };
  
  },

  },
});

export const { setModalBasketOpen, setModalOrderOpen } = modalSlicer.actions;
export default modalSlicer.reducer;