import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(7);
  // const [age, setAge] = useState(20);
  // const ref = useRef(null);
  useEffect(() => {
    console.log(`My age is`);
    console.log(window.innerWidth);
    // console.log(ref.current);
    return () => {
      console.log("Hi");
    };
  });
  return (
    <div>
      <h1>useEffect</h1>
      {/* <h2>count: {count}=</h2> */}
      {/* <h2>Age: {age}</h2> */}
      {/* <button onClick={() => setCount(count + 1)}>Click1</button> */}
      {/* <button onClick={() => setAge(age + 1)}>Click2</button> */}
    </div>
  );
}

export default App;
