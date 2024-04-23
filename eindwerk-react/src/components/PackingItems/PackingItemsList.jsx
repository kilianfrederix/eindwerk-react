import { useCallback, useState } from "react";
import PackingCategory from "./PackingCategory";
import PackingHeader from "./PackingHeader";
import PackingItems from "./PackingItems";

export default function PackingItemsList({ items, setItems, areFiltersApplied }) {
    const [selectedCategory , setSelectedCategory] = useState('');

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    const handleClearFilters = () => {
        setSelectedCategory(''); 
    };

    const handleRemoveAllItems = () => {
        setItems([])
    };

    

    const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

    return (
        <div>
            <PackingHeader 
                onClearFilters={handleClearFilters}
                onRemoveAllItems={handleRemoveAllItems}
                areFiltersApplied={areFiltersApplied}
            />
            <PackingCategory 
                onSelectedcategory={handleSelectCategory}
            />
            <PackingItems 
                items={filteredItems}
                setItems={setItems}
            />
        </div>
    )
}