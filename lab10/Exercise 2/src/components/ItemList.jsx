import React from 'react';

const ItemList = ({ items, onRemoveItem }) => {
  if (items.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📝</div>
        <p>Your task list is empty. Add something to get started!</p>
      </div>
    );
  }

  return (
    <ul className="item-list">
      {items.map((item) => (
        <li key={item.id} className="item-card">
          <div className="item-content">
            <span className="item-text">{item.text}</span>
          </div>
          <button 
            className="remove-button" 
            onClick={() => onRemoveItem(item.id)}
            aria-label="Remove item"
          >
            <span className="trash-icon">🗑️</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
