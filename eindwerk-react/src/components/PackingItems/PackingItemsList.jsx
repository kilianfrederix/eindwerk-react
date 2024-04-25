import { useState } from "react";
import PackingCategory from "./PackingCategory";
import PackingHeader from "./PackingHeader";
import PackingItems from "./PackingItems";

export default function PackingItemsList({ items, setItems, areFiltersApplied, onTogglePacked, removePackingItems, removeitem }) {

    const [selectedCategory , setSelectedCategory] = useState('');

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
            <PackingHeader 
                removePackingItems={removePackingItems}
                onClearFilters={handleClearFilters}
                areFiltersApplied={areFiltersApplied}
                items={items}
            />


            <PackingCategory 
                items={items}
                onSelectedcategory={handleSelectCategory}
            />
            <PackingItems 
                items={filteredItems}
                setItems={setItems}
                onTogglePacked={onTogglePacked}
                removeitem={removeitem}
            />
        </div>
    )
}