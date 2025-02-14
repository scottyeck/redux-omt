import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, selectCount } from "./store/counterSlice";

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={() => dispatch(increment())}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        count is {count}
      </button>
    </div>
  );
}

export default App;
