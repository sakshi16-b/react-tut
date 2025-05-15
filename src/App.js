import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Student from "./Student";
import College from "./College";
import User from "./User";

function App() {
  let userObj = {
    name: "sakshi",
    age: "30",
    city: "Haldwani",
  };
  let userObj2 = {
    name: "Rahul",
    age: "30",
    city: "Delhi",
  };
  let userObj3 = {
    name: "Nikhil",
    age: "35",
    city: "Goa",
  };
  let collegenames = ["IIT", "DU", "JNU", "KU"];
  const [student,setStudent]=useState(["Peter","Sam"])

function App() {
  

  return (
    <>
      <div className="App">
        <h1>Props in React js</h1>
        <College names={collegenames} />
        <Student student={ student} />
        <h2>User Data</h2>
        <User data={userObj} />
        <User data={userObj2} />
        <User data={userObj3} />
      </div>
    </>
  );
}

export default App;
