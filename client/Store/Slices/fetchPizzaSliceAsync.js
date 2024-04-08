import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchPizzaAsync = createAsyncThunk("pizza/fetchPizza", async () => {
  try {
    console.log(location, 6666);
    const _apiBase = `${location.protocol}//${location.host}`;

    const response = await fetch(`${_apiBase}/pizza`);

    if (!response.ok) {
      throw new Error(`Failed to fetch products `);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return `${error}`;
  }
});

export default fetchPizzaAsync;
