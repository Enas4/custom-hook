import { useState } from "react";
import useCustomHook from "./component/useCustomHook";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useCustomHook(count);
  return (
    <div className="App">
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
