import "./App.css";
import { RouteList } from './router'

function App() {
  return (
    <div className="grid justify-items-center content-center max-w-screen-md min-w-full w-full h-full bg-green-600">
      <h1 className="text-white italic font-bold text-center font-sans text-4xl py-6">Xbox Live</h1>

      <div className="border border-solid border-transparent rounded-xl border-4 p-5 w-2/5 bg-emerald-500">
        <RouteList />
      </div>
    </div>
  );
}

export default App;
