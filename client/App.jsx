import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import { useDispatch, useSelector } from "react-redux";
import fetchPizzaAsync from "./Store/Slices/fetchPizzaSliceAsync.js";
import fetchDrinksAsync from "./Store/Slices/fetchDrinksSliceAsync.js";

function App() {
  const dispatch = useDispatch();
  // const pizza = useSelector((state) => console.log(state, 2222));

  useEffect(() => {
    const init = async () => {
      dispatch(fetchPizzaAsync());
      dispatch(fetchDrinksAsync());
    };
    init();
  }, [dispatch]);

  return (
    <>
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
