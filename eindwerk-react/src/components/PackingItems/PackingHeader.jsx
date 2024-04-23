export default function PackingHeader ({ onRemoveAllItems, onClearFilters, areFiltersApplied }) {
    return (
        <header className="grid gap-2 items-center mb-6 border-b pb-6">
              <h2 className="font-bold text-2xl">Items to pack</h2>
              <div className="flex gap-2">
                <button 
                  className="bg-blue-500 text-blue-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all rounded-lg px-2 py-1"
                  onClick={onRemoveAllItems}
                  disabled={areFiltersApplied}
                >
                  Remove all items
                </button>
                <button
                  className={`bg-indigo-500 text-indigo-100 rounded-lg px-2 py-1 ${
                  areFiltersApplied ? '' : 'disabled:opacity-50 disabled:cursor-not-allowed'}`}
                  onClick={onClearFilters}
                  disabled={areFiltersApplied}
                >
                  Clear filters
                </button>
              </div>
            </header>
    )
}