function Wrapper({ children, color = "green" }) {
  //by default color will be green
  return (
    <>
      <div
        style={{
          border: "10px solid green",
          margin: "10px",
          width: "300px",
          color: color,
        }}
      >
        <h1>Hello from Wrapper</h1>
        {children}
      </div>
    </>
  );
}
export default Wrapper;
