function Users({ data, name }) {
  console.log(data);
  return (
    <>
      <h2>Hello Users </h2>
      <button onClick={data}>call function{name}</button>
    </>
  );
}
export default Users;
