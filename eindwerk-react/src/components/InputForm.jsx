import React from 'react';

export default function InputForm({ itemName, setItemName, onAddItem }) {
  const handleChange = (e) => {
    setItemName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem();
  };

  return (
    <form onSubmit={handleSubmit} className="flex rounded-lg overflow-hidden">
      <input
        placeholder="What would you like to pack?"
        type="text"
        value={itemName}
        onChange={handleChange}
        className="flex-1 p-4 bg-neutral-200 focus:bg-neutral-300/90 transition-all outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 active:bg-blue-400 text-blue-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
        disabled={!itemName.trim()} // Schakel de knop uit als itemName leeg is of alleen whitespace bevat
      >
        Add item
      </button>
    </form>
  );
}
