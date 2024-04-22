import catergoryList from "./categoryButton"

export default function categoryButtonList() {
    return (
        <div className="flex gap-2 items-center mb-2">Category:{" "}
            <button
                type="button"
                className="transition border border-blue-500 bg-blue-500 text-blue-100 px-4 py-1 rounded-full"
            >
                Documents
            </button>
            <button
                type="button"
                className="transition border border-neutral-200 text-neutral-500 px-4 py-1 rounded-full"
            >
                Clothes
            </button>
            <button
                type="button"
                className="transition border border-neutral-200 text-neutral-500 px-4 py-1 rounded-full"
            >
                Camping gear
            </button>
            <button
                type="button"
                className="transition border border-neutral-200 text-neutral-500 px-4 py-1 rounded-full"
            >
                Toiletry
            </button>
        </div>
    )
}