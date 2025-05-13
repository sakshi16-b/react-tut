import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Student from "./Student";

function App() {
  return (
    <>
      <div className="App">
        <Student name={"sakshi"} age={"26"} city={"Pune"} />
      </div>
    </>
  );
}

export default App;
