import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchDrinksAsync = createAsyncThunk("drinks/fetchPizza", async () => {
  try {
    console.log(location, 6666);
    const _apiBase = `${location.protocol}//${location.host}`;

    const response = await fetch(`${_apiBase}/drinks`);

    if (!response.ok) {
      throw new Error(`Failed to fetch products `);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return `${error}`;
  }
});

export default fetchDrinksAsync;
