// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [hr, setHr] = useState(new Date().getHours());
  const [min, setMin] = useState(new Date().getMinutes());
  const [sec, setSec] = useState(new Date().getSeconds());

  // setInterval(() => {
  //   setSec(date.getSeconds());
  // }, 1000);
  // var x;
  // console.log(x);
  // x = 10;

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setSec(date.getSeconds());
      setHr(date.getHours());
      setMin(date.getMinutes());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <button onClick={() => alert("Hi")}>click</button>
      <div className="inner-app">
        <p>{hr}:</p>
        <p>{min}:</p>
        <p>
          {sec} {"   "}
        </p>
        {hr >= 12 ? <p>PM</p> : <p>AM</p>}
      </div>
      <br></br>
      <div className="slider">
        <button style={{ padding: "7px 26px", borderRadius: "4px" }}>
          left
        </button>

        <div className="image">
          <div className="image1"></div>
          <div className="image1"></div>
          <div className="image1"></div>
        </div>
        <button style={{ padding: "7px 26px", borderRadius: "4px" }}>
          Right
        </button>
      </div>
    </div>
  );
}

export default App;
