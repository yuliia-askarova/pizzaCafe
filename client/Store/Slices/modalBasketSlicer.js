import { createSlice } from "@reduxjs/toolkit";

const modalBasketSlicer = createSlice({
  name: "modalBasket",
  initialState: {
    isOpen: false

  },
  reducers: {
    setOpen: (state, action) => {
        // console.log(state.isOpen);
 
    
        return {
            ...state,
           isOpen: !state.isOpen
        };
    
    },

  },
});

export const { setOpen } = modalBasketSlicer.actions;
export default modalBasketSlicer.reducer;