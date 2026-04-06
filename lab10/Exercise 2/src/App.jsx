import React, { useState } from 'react';
import ItemInput from './components/ItemInput';
import ItemList from './components/ItemList';
import './App.css';

function App() {
  const [items, setItems] = useState([
    { id: 1, text: 'Learn React Hooks' },
    { id: 2, text: 'Master List Rendering' },
    { id: 3, text: 'Build a Premium UI' }
  ]);

  const addItem = (text) => {
    const newItem = {
      id: Date.now(),
      text: text
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="app-container">
      <div className="glass-card">
        <header className="app-header">
          <h1>Task <span>Master</span></h1>
          <p className="subtitle">Manage your daily goals efficiently</p>
        </header>

        <ItemInput onAddItem={addItem} />
        
        <div className="divider"></div>

        <section className="list-section">
          <h2>Your Tasks</h2>
          <ItemList items={items} onRemoveItem={removeItem} />
        </section>

        <footer className="app-footer">
          <p>{items.length} {items.length === 1 ? 'item' : 'items'} remaining</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
