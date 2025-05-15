function College({ names }) {
  console.log(names);
  return (
    <>
      <h1>College Component</h1>
      {names[0]}
      <br />
      {names[1]}
      <br />
      {names[2]}
      <br />
      {names[3]}
    </>
  );
}
export default College;
