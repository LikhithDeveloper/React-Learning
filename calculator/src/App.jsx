import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";

const list = [
  "c",
  "1",
  "2",
  "+",
  "3",
  "4",
  "-",
  "5",
  "6",
  "*",
  "7",
  "8",
  "/",
  "=",
  "9",
  "0",
  ".",
];

function App() {
  return (
    <>
      <div className="outer">
        <Input>
        </Input>
        <div className="inner-div">
          <Button list={list}></Button>
        </div>
      </div>
    </>
  );
}

export default App;
