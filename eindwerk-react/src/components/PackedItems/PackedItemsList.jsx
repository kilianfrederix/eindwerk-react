import PackedHeader from './PackedHeader';
import PackedCategory from './PackedCategory';
import PackedItems from './PackedItems';
import { useState } from 'react';

export default function PackedItemsList({ items, setItems, areFiltersApplied, onTogglePacked, removePackedItems, removeItem }) {

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleClearFilters = () => {
    setSelectedCategory('');
  };

  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

  return (
    <div>
      <PackedHeader
        removePackedItems={removePackedItems}
        onClearFilters={handleClearFilters}
        areFiltersApplied={areFiltersApplied}
        items={items}
      />

      <PackedCategory
        items={items}
        onSelectedCategory={handleSelectCategory}
      />

      <PackedItems
        items={filteredItems}
        setItems={setItems}
        onTogglePacked={onTogglePacked}
        removeItem={removeItem}
      />
    </div>
  );
}


