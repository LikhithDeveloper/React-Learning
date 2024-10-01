// normal method
// const FoodList = (props) => {
//   return (
//     <li key={props.food} className="list-group-item">
//       {props.food}
//     </li>
//   );
// };

import css from "./Foodlist.module.css";



// destructuring
const FoodList = ({ food,id }) => {
  const click = (food1) => {
    let name = document.querySelectorAll(".lst");
    let btn = document.querySelector(`.${css.button}`);
    name.forEach((naam) => {
      let x = naam.querySelector(".spannn");
      if(x.innerHTML === food1){
        naam.classList.toggle('active');
      }
    })
  };
  return (
    <li className={`lst ${css["list"]} list-group-item `}>
      <span className="spannn">{food}</span>
      <button className={css.button}
      onClick={() => click(food)}
      >Buy</button>
    </li>
  );
};

export default FoodList;
