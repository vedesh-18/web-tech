import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
    // Functional requirement: Store the counter value using the useState Hook
    // Functional requirement: Initialize the counter with a default numeric value (0)
    const [count, setCount] = useState(0);

    // Functional requirement: Update the counter value when the increment button is clicked
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    // Functional requirement: Update the counter value when the decrement button is clicked
    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    // Functional requirement: Handle user interaction through button click events using onClick
    return (
        <div className="counter-container">
            <h1 className="counter-title">Simple Counter</h1>
            <div className="counter-display">
                {/* Functional requirement: Display the current counter value dynamically */}
                <span className="counter-value">{count}</span>
            </div>
            <div className="counter-controls">
                {/* Functional requirement: Add decrement button */}
                <button className="counter-btn decrement" onClick={decrement}>-</button>
                {/* Functional requirement: Add increment button */}
                <button className="counter-btn increment" onClick={increment}>+</button>
            </div>
        </div>
    );
};

export default Counter;
