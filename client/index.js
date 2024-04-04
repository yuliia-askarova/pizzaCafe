import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import store from './Store'
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(

    <Provider store = {store}>
    <RouterProvider router={router} />
    </Provider>
  
);