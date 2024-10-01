// let food = ["chicken", "mutton", "frawns", "crabs", "x", "y", "z"];

import FoodList from "./Foodlist";

const Food = (props) => {
  // console.log(props)
  return (
    <ul className="list-group">
      {props.name.map((item,id) => (
        // <li key={props.food} className="list-group-item">
        //   {item}
        // </li>
        <FoodList key={id} id={id} food = {item}/>
      ))}
    </ul>
  );
};

export { Food };
