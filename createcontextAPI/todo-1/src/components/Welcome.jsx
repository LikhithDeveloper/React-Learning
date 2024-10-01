import styles from "./Welcome.module.css";
import { TodoItems } from "../store/todo-items-store";
import { useContext } from "react";


const Welcome = () => {
  const todoitem = useContext(TodoItems);
  return todoitem.length === 0 && <p>Enjoy your day</p>;
};

export default Welcome;
