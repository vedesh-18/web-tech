import React, { useState } from 'react';

const ItemInput = ({ onAddItem }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddItem(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="premium-input"
          />
          <button type="submit" className="add-button">
            <span>+</span> Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItemInput;
