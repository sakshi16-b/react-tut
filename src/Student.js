import React from "react";

function Student(data) {
  return (
    <>
      <ul>
        <li> {data.name}</li>
        <li> {data.age}</li>
        <li>{data.city}</li>
      </ul>
    </>
  );
  //without jsx
  //  return React.createElement("h1", null, "Hello Student Component");
}
export default Student;
