import { useState, useRef, useContext } from "react";
import styles from "./Addtodo.module.css";
import { MdAddBox } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { TodoItems } from "../store/todo-items-store";

function AddTodo() {

  // The commented once are useState;

  // const [task1, date1] = useState("");
  // const [task2, date2] = useState("");

  const contextObj = useContext(TodoItems);
  // console.log(contextObj)
  const handelInput = contextObj.addItem;

  const todonameele = useRef();
  const tododateele = useRef();

  // const TaskChange = (event) => {
  //    console.log(event.target.value);
  //   date1(event.target.value);
  // };
  // const DateChange = (event) => {
  //    console.log(event.target.value);
  //   date2(event.target.value);
  // };

  const submit = (event) => {
    event.preventDefault();
    // console.log(todonameele.current);
    const task1 = todonameele.current.value;
    const  task2 = tododateele.current.value;
    todonameele.current.value = "";
    tododateele.current.value = "";
    handelInput(task1,task2);
    // clear();
  };

  // const clear = () => {
  //   date1("");
  //   date2("");
  // };

  return (
    <form className={`${styles["row1"]} row`} onSubmit={submit}>
      <div className="col-2">
        <input
          className={styles.input}
          ref={todonameele}
          type="text"
          placeholder="Enter todo here"
          // onChange={TaskChange}
        ></input>
      </div>
      <div className="col-2">
        <input
          className={styles.input}
          type="date"
          ref={tododateele}
          // onChange={DateChange}
        ></input>
      </div>
      <div className="col-1">
        <button
          type="submit"
          className={`${styles["add1"]} btn btn-secondary add`}
        >
          <IoIosAddCircle />
        </button>
      </div>
    </form>
  );
}

export { AddTodo };
