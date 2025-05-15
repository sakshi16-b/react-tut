import React from "react";
function User({ data }) {
  return (
    <>
      <p>{data.name}</p>
      <p>{data.age}</p>
      <p>{data.city}</p>
      <hr />
    </>
  );
}
export default User;
