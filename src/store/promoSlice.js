import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPromo = createAsyncThunk(
  "promo/fetchPromo",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch("http://localhost:3200/promo");
      if (!response.ok) {
        throw new Error("Ошибка");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchServices = createAsyncThunk(
  "promo/fetchServices",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch("http://localhost:3200/services");
      if (!response.ok) {
        throw new Error("Ошибка");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const promoSlice = createSlice({
  name: "promo",
  initialState: {
    promo: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchPromo.pending]: (state) => {
      state.status = "loading";
      state.promo = null;
    },
    [fetchPromo.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.promo = action.payload;
    },
    [fetchPromo.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default promoSlice.reducer;
