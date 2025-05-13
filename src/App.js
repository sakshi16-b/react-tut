import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function updateData() {
    setCount(count + 1);
  }

  return (
    <>
      <div className="App">
        <h2>{count}</h2>
        <button onClick={updateData}>Update data</button>
      </div>
    </>
  );
}

export default App;
