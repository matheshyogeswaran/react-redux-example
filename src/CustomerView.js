import React from "react";
import { useSelector } from "react-redux";

export default function CustomerView() {
  const customers = useSelector((state) => state.customers); // Select customers from state
  
  return (
    <div>
      <h4>Customer List</h4>
      <div>
        {customers.map((customer, index) => (
          <li key={index}>{customer}</li> // Render each customer in a list item
        ))}
      </div>
    </div>
  );
}
