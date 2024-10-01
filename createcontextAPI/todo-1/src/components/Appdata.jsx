import styles from "./Appdata.module.css";
import { MdDelete } from "react-icons/md";
import { TodoItems } from "../store/todo-items-store";
import { useContext } from "react";

function Appdata({todo,tododate}){

  const {deleteItem} = useContext(TodoItems);

    return <div className={`${styles.row1} row`}>
    <div className="col-2">
      {todo}
    </div>
    <div className="col-2">
      {tododate}
    </div>
    <div className="col-1">
    <button type="button" className="btn btn-primary" onClick={() => deleteItem(todo)}><MdDelete /></button>
    </div>
  </div>
}
export default Appdata;