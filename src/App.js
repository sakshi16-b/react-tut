import logo from "./logo.svg";
import "./App.css";
import User from "./User";

function App() {
  const userData = [
    {
      name: "Anil",
      age: "29",
      email: "anil@test.com",
      id: 1,
    },
    {
      name: "sam",
      age: "34",
      email: "sam@test.com",
      id: 2,
    },
    {
      name: "peter",
      age: "20",
      email: "peter@test.com",
      id: 3,
    },
    {
      name: "bruce",
      age: "50",
      email: "bruce@test.com",
      id: 4,
    },
  ];
  return (
    <div>
      <h1>Loop in JSX with map function</h1>
      {userData.map((user) => (
        <div key={user.id}>
          <User data={user} />
        </div>
      ))}
    </div>
  );
}

export default App;
