import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Skills from "./Skills";

function App() {
  const [gender, setGender] = useState("male");
  const [city, setCity] = useState("delhi");
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
          checked
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
        <select
          defaultValue={"Goa"}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: "10px" }}
        >
          <option value="Noida">Noida</option>
          <option value="Delhi">Delhi</option>
          <option value="Goa">Goa</option>
          <option value="Gurgaon">Gurgaon</option>
        </select>
        <h2>Selected City is :{city}</h2>
      </div>
    </>
  );
}

export default App;
