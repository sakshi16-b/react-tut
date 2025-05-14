import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="App">
        {show ? <h1>Hello World</h1> : ""}

        {/* <button onClick={() => setShow(true)}>Show</button>
        <button onClick={() => setShow(false)}>Hide</button> */}
        <button onClick={() => setShow(!show)}>Show/Hide</button>
      </div>
    </>
  );
}

export default App;
