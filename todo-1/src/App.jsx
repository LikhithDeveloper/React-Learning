import "./App.css";
// import './components/AppName'
// import './components/Addtodo'
import { AppName } from "./components/AppName";
import { AddTodo } from "./components/Addtodo";
import Appdata from "./components/Appdata";
import Appdatas from "./components/Appdatas";

function App() {
  const items = [{
    name:"Milk",
    date:"04-08-2024"
  },
  {
    name:"code",
    date:"everyday"
  },
  {
    name:"Drink",
    date:"Water"
  }
]
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <Appdatas todoitems={items}></Appdatas>
      {/* <div>
        <Appdata todo="Milk" tododate="04-08-2024"></Appdata>
        <Appdata todo="Go to college" tododate="04-08-2024"></Appdata>
      </div> */}
    </center>
  );
}

export default App;
