import logo from "./logo.svg";
import "./App.css";
import Clock from "./Clock";
import { useState } from "react";


function App() {
  const [color, setColor] = useState("green");
  return(
    <>
      <h1>Digital Clock in React JS</h1>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value="orange">orange</option>
        <option value="pink">pink</option>
        <option value="blue">blue</option>
        <option value="yellow">yellow</option>
      </select>
      <Clock color={color} />
    </>
);
       
export default App;
