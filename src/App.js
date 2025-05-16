import logo from "./logo.svg";
import "./App.css";
import User from "./User";

function App() {
  const name = "peter";
  const userObj = {
    name: "anil sidhu",
    email: "anil@test.com",
    age: 29,
  };
  const userArray = ["sam", "peter", "bruce"];
  let x = 10;
  let y = 20;
  let path =
    "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/3/22/0/shutterstock_national-puppy-day-224423782.jpg.rend.hgtvcom.616.462.suffix/1521744674350.jpeg";
  function fruit() {
    return "Apple";
  }
  function sum(a, b) {
    return a + b;
  }
  function operation(a, b, op) {
    if (op == "+") {
      return a + b;
    } else if (op == "-") {
      return a - b;
    } else {
      return a * b;
    }
  }

  return (
    <div className="App">
      <h1>JSX with Curly Braces</h1>
      <h1>{name ? name : "user not found"}</h1>
      <h1>{x + y}</h1>
      <h1> {fruit()}</h1>
      <h1>{sum(10, 100)}</h1>
      <h1>{operation(20, 10, "")}</h1>
      <h1>{userObj.age}</h1>
      <h1>{userArray[0]}</h1>
      <input type="text" value={name} id={name} />
      <br />
      <img src={path} />
    </div>
  );
}

export default App;
