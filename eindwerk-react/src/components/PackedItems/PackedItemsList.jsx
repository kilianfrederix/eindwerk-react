import PackedHeader from './PackedHeader';
import PackedCategory from './PackedCategory';
import PackedItems from './PackedItems';
import { useState } from 'react';

export default function PackedItemsList({ items, setItems, areFiltersApplied, onTogglePacked }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleClearFilters = () => {
    setSelectedCategory('');
  };

  const handleRemovePackedItems = () => {
    const filteredItems = items.filter((item) => !item.packed);
    console.log('Filtered Items:', filteredItems);
    setItems(filteredItems);
  };


  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

  return (
    <div>
      <PackedHeader
      onRemovePackedItems={handleRemovePackedItems}
      onClearFilters={handleClearFilters}
      areFiltersApplied={areFiltersApplied}
    />

      <PackedCategory 
      onSelectedCategory={handleSelectCategory} />

      <PackedItems 
        items={filteredItems} 
        setItems={setItems} 
        onTogglePacked={onTogglePacked} />
    </div>
  );
}
