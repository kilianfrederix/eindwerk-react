export default function PackedHeader () {
    return (
        <header className="grid gap-2 items-center mb-6 border-b pb-6">
                <h2 className="font-bold text-2xl">Packed items</h2>
                <div className="flex gap-2">
                    <button className="bg-blue-500 text-blue-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all rounded-lg px-2 py-1">
                    Remove all items
                    </button>
                    <button
                        disabled=""
                        className="bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-indigo-100 rounded-lg px-2 py-1">
                        Clear filters
                    </button>
                </div>
        </header>
    )
}   