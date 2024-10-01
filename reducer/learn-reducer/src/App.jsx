import { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// the reducer function should be pure functions that means it should not depend on other functions

const intialvalue = 0;
const reducer = (state, action) => {
  if (action.type === "increment") {
    return state + 1;
  } else if (action.type === "decrement") {
    return state - 1;
  }
};

const intialvalue1 = [];

const add_data = (state1, action) => {
  if (action.type === "add") {
    return [...state1, action.payload];
  } else if(action.type === "delete"){
    return state1.filter((items) => {return items.name!=action.payload})
  } else {
    return state1;
  }
};

function App() {
  // const [number,setNumber] = useState(0);
  const [state, dispatch] = useReducer(reducer, intialvalue);
  const [state1, dispatch1] = useReducer(add_data, intialvalue1);
  // console.log(state1);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  // const increment = () => {
  //   setNumber(number+1);
  // }
  // const decrement = () => {
  //   setNumber(number-1);
  // }

  const addname = (e) => {
    e.preventDefault();
    // console.log(`this is event:${e}`);
    const contact = { id: Date.now(), name, email };
    dispatch1({ type: "add", payload: contact });
    setname("");
    setemail("");
  };

  return (
    <>
      <div className="box">
        <h2>useReducer Hook</h2>
        <form onSubmit={addname}>
          <input
            type="text"
            value={name}
            placeholder="Enter name"
            onChange={(e) => setname(e.target.value)}
          ></input>
          <input
            type="email"
            value={email}
            placeholder="Enter mail"
            onChange={(e) => setemail(e.target.value)}
          ></input>
          <button>Submit</button>
        </form>
        <h1>{state}</h1>
        <div>
          <button
            style={{ width: "100px", height: "30px" }}
            onClick={() => {
              dispatch({ type: "increment" });
            }}
          >
            Increment
          </button>
          <button
            style={{ width: "100px", height: "30px" }}
            onClick={() => {
              dispatch({ type: "decrement" });
            }}
          >
            Decrement
          </button>
        </div>
      </div>
      {state1.map((item) => {
        return (
          <div className="details">
          <li key={item.id} style={{ textAlign: "center" }}>
            <h3>{item.name}</h3>
            <h4>{item.email}</h4>
            <button onClick={() => dispatch1({type:"delete",payload:item.name})}>Delete</button>
          </li>
          </div>
        );
      })}
    </>
  );
}

export default App;
