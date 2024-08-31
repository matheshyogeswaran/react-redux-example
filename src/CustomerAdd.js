import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "./slices/customerSlice";

export default function CustomerAdd() {
  const [input, setInput] = useState(""); // State to store input value
  const dispatch = useDispatch(); // Get the dispatch function

  const addCustomerHandler = () => {
    if (input) {
      dispatch(addCustomer(input)); // Dispatch the action to add a customer
      setInput(""); // Reset input after adding
    }
  };

  return (
    <div>
      <h3>Add New Customer</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Update state on input change
      />
      <button onClick={addCustomerHandler}>Add</button> {/* Button to add customer */}
    </div>
  );
}
