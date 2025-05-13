import logo from "./logo.svg";
import "./App.css";
import Users from "./Users";
import User from "./User";

function App() {
  // function Apple() {
  //   return <div>Apple Component</div>;
  // }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Users />
      <User />
      {/* <Apple></Apple> */}
      {/* {Apple()} */}
    </div>
  );
}

export default App;
