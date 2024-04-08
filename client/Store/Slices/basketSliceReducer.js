import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {},
  reducers: {
    addToBasket: (state, action) => {
        const { payload } = action;
        const { _id } = payload;
        // console.log(payload, 5555);
    
        if (_id in state) {
            return {
                ...state,
                [_id]: {
                    ...state[_id],
                    quantity: state[_id].quantity + 1,
                    amount: state[_id].amount + payload.amount
                }
            };
        }
    
        return {
            ...state,
            [_id]: {
                ...payload,
                quantity: 1
            }
        };
    
    },

  },
});

export const { addToBasket } = basketSlice.actions;
export default basketSlice.reducer;
