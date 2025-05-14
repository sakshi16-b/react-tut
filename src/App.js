import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState();
  const [print, setPrint] = useState(false);

  return (
    <>
      <div className="App">
        {print ? <h1>Input Field Value : {data}</h1> : null}
        <input type="text" onChange={(e) => setData(e.target.value)} />
        <button onClick={() => setPrint(true)}>Print Data</button>
      </div>
    </>
  );
}

export default App;
