import styles from "./Appdata.module.css";
import { MdDelete } from "react-icons/md";

function Appdata({todo,tododate,onClickDelete}){

    return <div className={`${styles.row1} row`}>
    <div className="col-2">
      {todo}
    </div>
    <div className="col-2">
      {tododate}
    </div>
    <div className="col-1">
    <button type="button" className="btn btn-primary" onClick={() => onClickDelete(todo)}><MdDelete /></button>
    </div>
  </div>
}
export default Appdata;