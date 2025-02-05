import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCurrency: 'USD',
  exchangeRates: {},
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setSelectedCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    },
    setExchangeRates: (state, action) => {
      state.exchangeRates = action.payload;
    },
  },
});

export const { setSelectedCurrency, setExchangeRates } = currencySlice.actions;

export default currencySlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice';
import currencyReducer from '../features/currency/currencySlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    currency: currencyReducer,
  },
});