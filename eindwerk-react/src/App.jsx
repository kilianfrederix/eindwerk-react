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

  // Functie om een nieuw item toe te voegen aan de lijst
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

  // Functie om de 'packed' status van een item te togglen
  const handleTogglePacked = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, packed: !item.packed } : item
    );
    setItems(updatedItems);
  };

  // Functie om alle items uit de 'PackingItemsList' te verwijderen
  const removePackingItems = () => {
    setItems(items.filter((item) => item.packed)); // Verwijder alle niet-ingepakte items
  };

  // Functie om alle items uit de 'PackedItemsList' te verwijderen
  const removePackedItems = () => {
    setItems(items.filter((item) => !item.packed)); // Verwijder alle ingepakte items
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
          {/* PackingItemsList */}
          <PackingItemsList
            items={items.filter((item) => !item.packed)}
            setItems={setItems}
            onTogglePacked={handleTogglePacked}
            removePackingItems={removePackingItems} // Doorgeven van functie om items te verwijderen
          />
          {/* PackedItemsList */}
          <PackedItemsList
            items={items.filter((item) => item.packed)}
            setItems={setItems}
            onTogglePacked={handleTogglePacked}
            removePackedItems={removePackedItems} // Doorgeven van functie om items te verwijderen
          />
        </div>
      </div>
    </div>
  );
}

export default App;




