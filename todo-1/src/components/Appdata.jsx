import styles from "./Appdata.module.css";

function Appdata({todo,tododate}){

    return <div className={`${styles.row1} row`}>
    <div className="col-2">
      {todo}
    </div>
    <div className="col-2">
      {tododate}
    </div>
    <div className="col-1">
    <button type="button" className="btn btn-primary">Delete</button>
    </div>
  </div>
}
export default Appdata;