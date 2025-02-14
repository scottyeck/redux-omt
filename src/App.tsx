import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, selectCount } from "./store/counterSlice";

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(increment())}>count is {count}</button>;
}

export default App;
