import "./App.css";
// import './components/AppName'
// import './components/Addtodo'
import { AppName } from "./components/AppName";
import { AddTodo } from "./components/Addtodo";
import Appdata from "./components/Appdata";
import Appdatas from "./components/Appdatas";
import { useState } from "react";
import Welcome from "./components/Welcome";
import StudentForm from "./components/StudentForm";
function App() {
  const items = [];

  const [TextInput, SetInput] = useState(items);

  const handelInput = (a, b) => {
    // console.log(`The data is ${a} and ${b}`);
    const newdata = [...TextInput, { name: a, date: b }];
    SetInput(newdata);
  };

  const onClickDelete = (taskname) => {
    // console.log(taskname);
    var newnewdata = TextInput.filter((item) => item.name != taskname);
    SetInput(newnewdata);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handelInput={handelInput} />
      {TextInput.length === 0 && <Welcome></Welcome>}
      <Appdatas todoitems={TextInput} onClickDelete={onClickDelete}></Appdatas>
      <StudentForm />
    </center>
  );
}

export default App;
