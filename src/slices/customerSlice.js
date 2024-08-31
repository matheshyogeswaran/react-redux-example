import { createSlice } from "@reduxjs/toolkit";

const initialState = []; // Initial state is an empty array

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer(state, action) {
      state.push(action.payload); // Adds new customer to state
    },
  },
});

// Export actions and reducer
export const { addCustomer } = customerSlice.actions;
export default customerSlice.reducer;
