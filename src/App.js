import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Skills from "./Checkboxes";

function App() {
  return (
    <>
      <div className="App">
        <h1>Handle Checkbox in React</h1>
        <Skills />
      </div>
    </>
  );
}

export default App;
