import './App.css';
import InputForm from './components/InputForm';
import CategoryButtonList from './components/CategoryButtonList';
import PackingItemsList from './components/PackingItems/PackingItemsList';
import PackedItemsList from './components/PackedItems/PackedItemsList';

function App() {
  return (
    <div id="app">
      <div className="max-w-[1100px] mx-auto py-8">
        <h1 className="mb-4 text-4xl font-bold">Packing list</h1>
        <div className="my-8">
          <CategoryButtonList />


          <InputForm />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-12 transition ">
          <PackingItemsList />
          
          <PackedItemsList />
        </div>
      </div>
    </div>
  );
}

export default App;
