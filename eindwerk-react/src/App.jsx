import './App.css';

function App() {
  return (
    <div className="max-w-[1100px] mx-auto py-8">
      <h1 className="mb-4 text-4xl font-bold">Packing list</h1>
      <div className="my-8">

        <form className="flex rounded-lg overflow-hidden">
          <input
            placeholder="What would you like to pack?"
            type="text"
            className="flex-1 p-4 bg-neutral-200 focus:bg-neutral-300/90 transition-all outline-none"
            defaultValue="Something"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 active:bg-blue-400 text-blue-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Add item
          </button>
        </form>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-12 transition ">
        <div>
          <header className="grid gap-2 items-center mb-6 border-b pb-6">
            <h2 className="font-bold text-2xl">Items to pack</h2>
            <div className="flex gap-2">
              <button className="bg-blue-500 text-blue-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all rounded-lg px-2 py-1">
                Remove all items
              </button>
              <button
                disabled=""
                className="bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-indigo-100 rounded-lg px-2 py-1"
              >
                Clear filters
              </button>
            </div>
          </header>
          <div
            style={{ opacity: 1, pointerEvents: "all" }}
            className="transition-all my-4 flex gap-2 flex-wrap items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-filter"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            <button
              type="button"
              className="transition-all px-4 py-1 rounded-full text-sm bg-neutral-300 hover:bg-neutral-400/70"
            >
              Documents
            </button>
            <button
              type="button"
              className="transition-all px-4 py-1 rounded-full text-sm bg-neutral-300 hover:bg-neutral-400/70"
            >
              Clothes
            </button>
            <button
              type="button"
              className="transition-all px-4 py-1 rounded-full text-sm bg-neutral-300 hover:bg-neutral-400/70"
            >
              Camping gear
            </button>
            <button
              type="button"
              className="transition-all px-4 py-1 rounded-full text-sm bg-neutral-300 hover:bg-neutral-400/70"
            >
              Toiletry
            </button>
          </div>
          <ul className="grid gap-2">
            <li>
              <div className="overflow-hidden bg-neutral-200 transition-all rounded-lg flex justify-between gap-2 ">
                <div className="p-4 flex-1 flex gap-4 items-center justify-between">
                  <div className="grid">
                    <span>Passport</span>
                    <span className="text-neutral-400">Documents</span>
                  </div>
                  <button className="text-sm opacity-30 hover:opacity-100 px-4 py-1 flex items-center justify-center bg-gray-400 text-black hover:bg-red-300/70 transition-all hover:text-red-500 rounded-full text-lg">
                    × remove item
                  </button>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 transition-all text-blue-100 p-4">
                  Pack
                </button>
              </div>
            </li>

          </ul>
        </div>
        <div>
          <header className="grid gap-2 items-center mb-6 border-b pb-6">
            <h2 className="font-bold text-2xl">Packed items</h2>
            <div className="flex gap-2">
              <button className="bg-blue-500 text-blue-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all rounded-lg px-2 py-1">
                Remove all items
              </button>
              <button
                disabled=""
                className="bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-indigo-100 rounded-lg px-2 py-1"
              >
                Clear filters
              </button>
            </div>
          </header>
          <div
            style={{ opacity: 1, pointerEvents: "all" }}
            className="transition-all my-4 flex gap-2 flex-wrap items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-filter"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            <button
              type="button"
              className="transition-all px-4 py-1 rounded-full text-sm bg-neutral-300 hover:bg-neutral-400/70"
            >
              Documents
            </button>
            <button
              type="button"
              className="transition-all px-4 py-1 rounded-full text-sm bg-neutral-300 hover:bg-neutral-400/70"
            >
              Clothes
            </button>
            <button
              type="button"
              className="transition-all px-4 py-1 rounded-full text-sm bg-neutral-300 hover:bg-neutral-400/70"
            >
              Camping gear
            </button>
            <button
              type="button"
              className="transition-all px-4 py-1 rounded-full text-sm bg-neutral-300 hover:bg-neutral-400/70"
            >
              Toiletry
            </button>
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default App;
