import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Student from "./Student";
import Wrapper from "./Wrapper";
import User from "./User";

function App() {
  return (
    <>
      <div className="App">
        <h1>Props in React js 19</h1>
        <Wrapper color="orange">
          <User name="Sakshi Bisht" />
          <User />
        </Wrapper>
        <Wrapper color="blue">
          <h1>Hello Admin</h1>
          <h2 style={{ color: "red" }}>Please Login</h2>
        </Wrapper>
        <Wrapper>
          <User name="Sakshi Bisht" />
          <User />
        </Wrapper>
      </div>
    </>
  );
}

export default App;
