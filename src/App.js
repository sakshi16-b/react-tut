import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Student from "./Student";
import Users from "./Users";

function App() {
  function getData() {
    alert("Hello from App component");
  }
  return (
    <>
      <div className="App">
        <Users  name="user" data={getData} />
        <Student name="student" data={getData} />
      </div>
    </>
  );
}

export default App;
