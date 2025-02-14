import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCount } from "./store/counterSlice";

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="text-2xl font-bold">Count: {count}</div>
        <div className="flex gap-4">
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
