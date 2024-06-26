export default function PackingHeader({ onClearFilters, areFiltersApplied, removePackingItems, items }) {
  const handleRemoveItems = () => {
    if (items.some((item) => !item.packed)) {
      removePackingItems();
    }
  };

  return (
    <header className="grid gap-2 items-center mb-6 border-b pb-6">
      <h2 className="font-bold text-2xl">Items to pack</h2>
      <div className="flex gap-2">
        <button
          className={`bg-blue-500 text-blue-100 rounded-lg px-2 py-1 ${items.some((item) => item.packed) ? '' : 'disabled:opacity-50 disabled:cursor-not-allowed'}`}
          onClick={handleRemoveItems}
          disabled={!items.some((item) => !item.packed)}
        >
          Remove all items
        </button>
        <button
          className={`bg-indigo-500 text-indigo-100 rounded-lg px-2 py-1 ${areFiltersApplied ? '' : 'disabled:opacity-50 disabled:cursor-not-allowed'}`}
          onClick={onClearFilters}
          disabled={areFiltersApplied || items.length === 0}
        >
          Clear filters
        </button>
      </div>
    </header>
  );
}






