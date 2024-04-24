import { useState } from "react";
import PackingCategory from "./PackingCategory";
import PackingHeader from "./PackingHeader";
import PackingItems from "./PackingItems";

export default function PackingItemsList({ items, setItems, areFiltersApplied, onTogglePacked }) {

    const [selectedCategory , setSelectedCategory] = useState('');

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    const handleClearFilters = () => {
        setSelectedCategory(''); 
    };

    const handleRemoveAllItems = () => {
        const filteredItems = items.filter((item) => item.packed);
        console.log('Filtered Items:', filteredItems);
        setItems(filteredItems);
    };



    const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

    return (
        <div>
            <PackingHeader 
                onRemoveAllItems={handleRemoveAllItems}
                onClearFilters={handleClearFilters}
                areFiltersApplied={areFiltersApplied}
            />


            <PackingCategory 
                onSelectedcategory={handleSelectCategory}
            />
            <PackingItems 
                items={filteredItems}
                setItems={setItems}
                onTogglePacked={onTogglePacked}
            />
        </div>
    )
}