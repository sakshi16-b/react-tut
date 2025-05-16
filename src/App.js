import logo from "./logo.svg";
import "./App.css"
import { useState } from "react";


function App() {
  const [inputval, setInputVal] = useState("");
  function onClear() {
    setInputVal("");
  }
  return (
    <>
      <div className="App">
        <h1>Get Input Field value</h1>
        <br></br>
        <br></br>
        <input
          style={{ padding: "10px" }}
          type="text"
          value={inputval}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Enter value"
        />
        <br></br>
        <br></br>
        {inputval}
        <br></br>
        <br></br>
        <button onClick={onClear}>Clear</button>

      </div>
    </>
  );
}         
       
export default App;
