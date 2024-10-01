import Appdata from "./Appdata";
import styles from "./Appdatas.module.css"
import { TodoItems } from "../store/todo-items-store";
import { useContext } from "react";
// import { TodoItems } from "../store/todo-items-store";
function Appdatas() {

  const contextObj = useContext(TodoItems);
  const todoitems = contextObj.items;
  const onClickDelete = contextObj.deleteItem;
  // console.log(todoitems);
  return (
    <div className={`${styles['row1']}`}>
      {todoitems.map((item) => (
        <Appdata key={`${item.name}-${item.date}`} todo={item.name} tododate={item.date}></Appdata>
      ))}
    </div>
  );
}

export default Appdatas;
