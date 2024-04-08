import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import pizzaSliceReducer from "./Slices/pizzaSliceReducer";
import drinksSliceReducer from "./Slices/drinksSliceReducer";
import basketSliceReducer from "./Slices/basketSliceReducer";
import modalBasketSlicer from "./Slices/modalBasketSlicer";


const store = configureStore({
  reducer: {
    pizza: pizzaSliceReducer,
    drinks: drinksSliceReducer,
    basket: basketSliceReducer,
    modalBasket: modalBasketSlicer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
