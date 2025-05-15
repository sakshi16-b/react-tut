import React, { Component } from "react";
function User({ name = "New User" }) {
  //default props.If we forgot to pass value to a prop then it will
  //take default value like sam.
  return (
    <>
      <h1>User Component</h1>
      <h2>Name: {name}</h2>
    </>
  );
}
export default User;
