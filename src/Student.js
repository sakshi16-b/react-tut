import React from "react";

function Student({ data, name }) {
  return (
    <>
      <button onClick={data}>Call Function {name}</button>
    </>
  );
  //without jsx
  //  return React.createElement("h1", null, "Hello Student Component");
}
export default Student;
