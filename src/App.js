import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Skills from "./Skills";

function App() {

  return (
    <>
      <div className="App">
        <h1>Controlled Component</h1>
        <Skills/>
      </div>
    </>
  );
}

export default App;
