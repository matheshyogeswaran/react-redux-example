import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./slices/customerSlice";

// Configure the Redux store with customerReducer
export const store = configureStore({
  reducer: {
    customers: customerReducer, // Manage customers state with customerReducer
  },
});
