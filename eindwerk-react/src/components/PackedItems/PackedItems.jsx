export default function PackedItems () {
    return (
        <ul className="grid gap-2">
            <li>
                <div className="overflow-hidden bg-neutral-200 transition-all rounded-lg flex justify-between gap-2 flex-row-reverse">
                    <div className="p-4 flex-1 flex gap-4 items-center justify-between">
                        <div className="grid">
                            <span>Jeans</span>
                            <span className="text-neutral-400">Clothes</span>
                        </div>
                    <button className="text-sm opacity-30 hover:opacity-100 px-4 py-1 flex items-center justify-center bg-gray-400 text-black hover:bg-red-300/70 transition-all hover:text-red-500 rounded-full text-lg">
                    × remove item
                    </button>
                    </div>
                    <button className="bg-sky-500 hover:bg-sky-600 transition-all text-sky-100 p-4">
                        Unpack
                    </button>
                </div>
            </li>
        </ul>
    )
}