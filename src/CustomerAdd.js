import React, { useState } from "react";
import { addCustomer } from "./slices/customerSlice";
import { useDispatch } from "react-redux";

export default function CustomerAdd() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    function addCustomerHandler() {
        if (input) {
            dispatch(addCustomer(input));
            setInput("");

        }
    };

    return (
        <div>
            <h3>Add New Customer</h3>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addCustomerHandler}>Add</button>


        </div>
    );
}