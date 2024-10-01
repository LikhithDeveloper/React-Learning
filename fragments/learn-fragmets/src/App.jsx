import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Food } from "./components/FoodItems";
import Error from "./components/ErrorMessage";
// we have to import it for using fragments
import React from "react";
import Container from "./components/Container";
import Input from "./components/Input";

// with fragment
// syntax: <React.Fragment></React.Fragment>
// short syntax: <></>
function App() {
  // using maps

  // normal function
  //   let food = ['chicken', 'mutton', 'frawns', 'crabs'];
  //   function item(ele){
  //     return <li class="list-group-item">{ele}</li>;
  //   }
  //   return <>
  //   <div>Helathy food</div>
  //   <ul class="list-group">
  //     {food.map(item)}
  // </ul>
  // </>

  // let food = [
  //   'chicken',
  //   'chocolate'
  // ];
  // let food = [];

  // if (food.length === 0){
  //   return <h3>Iam still hungry</h3>
  // }

  // This function passed as a prop

  // state management
  let textToShow = "";
  const [food, textMethod] = useState([]);

  const change = (event) => {
    // console.log(event);
    // textToShow = event.target.value;
    // textMethod(textToShow);
    // console.log(event);
    if(event.code === 'Enter'){
      let newfood = event.target.value;
      event.target.value = "";
      let food1 = [...food,newfood];
      textMethod(food1);
    }
  };

  return (
    <>
      <Container>
        {/* conditional operators in JSX*/}
        <h2 style={{textAlign:"center"}}>Helathy food</h2>
        {/* {food.length === 0 ? <h3>Iam Hungry</h3>:null} */}{" "}
        {/* this is tenery operator */}
        {/* {food.length === 0 && <h3>Iam hungry</h3>} */}
        {/* function passed as a prop */}
        <Input change={change}></Input>
        {/* <p>{text}</p> */}
        {/* <ul className="list-group">
        {food.map((item) => (
          <li key={item} className="list-group-item">
          {item}
          </li>
          ))}
          </ul> */}
        <Food name={food} />
        <Error name={food} />
      </Container>
      {/* <Container>
        <p>Above list is favorite food list of</p>
      </Container> */}
    </>
  );
}

export default App;
// without fragments
/*
function App() {
  return <section> 
  <div>Helathy food</div>
  <ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
</section>
}
 */

// here
/*<div>Helathy food</div>
  <ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul> */

// this thing should wrap in div or in block tag
// so the dom will create extra node in it to avoid
// this we use fragments
