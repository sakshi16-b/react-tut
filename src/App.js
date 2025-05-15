import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState();
  const clearData = () => {
    setName("");
    setPassword("");
    setEmail("");
  };

  return (
    <>
      <div className="App">
        <h1>Controlled Component</h1>
        <br></br>
        <br></br>
        <input
          style={{ padding: "10px" }}
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          value={name}
        />
        <br></br>
        <br></br>
        <input
          style={{ padding: "10px" }}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          value={password}
        />
        <br></br>
        <br></br>
        <input
          style={{ padding: "10px" }}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          value={email}
        />
        <br></br>
        <br></br>
        <button>Submit</button>
        <br></br>
        <br></br>
        <button onClick={clearData}>Clear</button>

        <h3>{name}</h3>

        <h3>{password}</h3>

        <h3>{email}</h3>
      </div>
    </>
  );
}

export default App;
