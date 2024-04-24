import React from 'react';

export default function PackedItems({ items, setItems, onTogglePacked }) {
  const handleRemoveItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <ul className="grid gap-2">
      {items.map((item) => (
        <li key={item.id}>
          <div className="overflow-hidden bg-neutral-200 transition-all rounded-lg flex justify-between gap-2">
            <div className="p-4 flex-1 flex gap-4 items-center justify-between">
              <div className="grid">
                <span>{item.name}</span>
                <span className="text-neutral-400">{item.category}</span>
              </div>
              <button
                className="text-sm opacity-30 hover:opacity-100 px-4 py-1 flex items-center justify-center bg-gray-400 text-black hover:bg-red-300/70 transition-all hover:text-red-500 rounded-full text-lg"
                onClick={() => handleRemoveItem(item.id)}
              >
                × remove item
              </button>
            </div>
            <button
              className="bg-sky-500 hover:bg-sky-600 transition-all text-sky-100 p-4"
              onClick={() => onTogglePacked(item.id)}
            >
              Unpack
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
