import React, { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import CategoryButtonList from './components/CategoryButtonList';
import PackingItemsList from './components/PackingItems/PackingItemsList';
import PackedItemsList from './components/PackedItems/PackedItemsList';

function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const handleAddItem = () => {
    if (!itemName.trim() || !selectedCategory) {
      return;
    }
    const newItem = {
      id: crypto.randomUUID(),
      name: itemName,
      category: selectedCategory,
      packed: false,
    };
    setItems([...items, newItem]);
    setItemName('');
    setSelectedCategory('');
  };
  const handleTogglePacked = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, packed: !item.packed } : item
    );
    setItems(updatedItems);
  };

  const removePackingItems = () => {
    setItems(items.filter((item) => item.packed));
  };

  const removePackedItems = () => {
    setItems(items.filter((item) => !item.packed)); 
  };

  const areFiltersApplied = !selectedCategory;

  return (
    <div id="app">
      <div className="max-w-[1100px] mx-auto py-8">
        <h1 className="mb-4 text-4xl font-bold">Packing list</h1>
        <div className="my-8">
          <CategoryButtonList
            onSelectedCategory={setSelectedCategory}
            areFiltersApplied={areFiltersApplied}
          />
          <InputForm
            itemName={itemName}
            setItemName={setItemName}
            onAddItem={handleAddItem}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-12 transition">
          <PackingItemsList
            items={items.filter((item) => !item.packed)}
            setItems={setItems}
            onTogglePacked={handleTogglePacked}
            removePackingItems={removePackingItems}
          />
          <PackedItemsList
            items={items.filter((item) => item.packed)}
            setItems={setItems}
            onTogglePacked={handleTogglePacked}
            removePackedItems={removePackedItems}
          />
        </div>
      </div>
    </div>
  );
}

export default App;




