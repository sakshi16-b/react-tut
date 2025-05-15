import React from "react";

function Student(data) {
  console.log(data);
  return (
    <>
      <p>{data[0]}</p>
      <p> {data[1]}</p>
      <p>{data[2]}</p>
      <hr />
    </>
  );
  //without jsx
  //  return React.createElement("h1", null, "Hello Student Component");
}
export default Student;
