import logo from "./logo.svg";
import "./App.css";
import Users from "./Users";
import User from "./User";
import Student from "./Student";

function App() {
  // function Apple() {
  //   return <div>Apple Component</div>;
  // }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Users />
      <User />
      <Student />
      {/* <Apple></Apple> */}
      {/* {Apple()} */}
    </div>
  );
}

export default App;
