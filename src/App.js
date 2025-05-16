import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Skills from "./Skills";

function App() {
  const [gender, setGender] = useState("male");
  return (
    <>
      <div className="App">
        <h1>Handle Radio and Dropdown Button</h1>
        <h4>Select Gender</h4>
        <input
          type="radio"
          onChange={(e) => setGender(e.target.value)}
          id="male"
          value="Male"
          name="gender"
        />
        <label htmlFor="male"> Male</label>
        <br />
        <input
          type="radio"
          onChange={(e) => setGender(e.target.value)}
          id="female"
          value="Female"
          name="gender"
        />
        <label htmlFor="female">Female</label>
        <br />
        <h2>Selected Gender is :</h2>
        {gender}
        <br />
        <br />
        <br />
        <br />
        <h2>Select City</h2>
        <select defaultValue={"goa"}>
          <option value="Noida">Noida</option>
          <option value="delhi">Delhi</option>
          <option value="goa">Goa</option>
          <option value="Gurgaon">Gurgaon</option>
        </select>
      </div>
    </>
  );
}

export default App;
