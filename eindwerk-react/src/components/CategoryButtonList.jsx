import { useState } from "react";

export default function CategoryButtonList({ onSelectedCategory }) {

    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category)
        onSelectedCategory(category);
    };
    return (
        <div className="flex gap-2 items-center mb-2">
        Category:{" "}
        {['Documents', 'Clothes', 'Camping gear', 'Toiletry'].map((category) => (
            <button
                key={category}
                type="button"
                className={`transition border ${
                selectedCategory === category ? 'border-blue-500 bg-blue-500 text-blue-100' : 'border-neutral-200 text-neutral-500'} px-4 py-1 rounded-full`}
                onClick={() => handleCategoryClick(category)}
            >
            {category}
            </button>
        ))}
    </div>
    )
}