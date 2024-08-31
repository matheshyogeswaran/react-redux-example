import React from "react";
import { useSelector } from "react-redux";

export default function CustomerView() {
    const customers = useSelector((state) => state.customers);
    return (
        <div>
            <h4>Customer List</h4>
            <div>
                {customers.map((customer, index) => (
                    <li key={index}>{customer}</li>))}
            </div>
        </div>
    )
}