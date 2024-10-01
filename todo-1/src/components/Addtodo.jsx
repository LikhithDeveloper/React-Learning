import styles from "./Addtodo.module.css"

function AddTodo() {
    return <div className={`${styles["row1"]} row`}>
    <div className="col-2">
      <input className= {styles.input} type='text' placeholder='Enter todo here'></input>
    </div>
    <div className="col-2">
      <input className= {styles.input} type='date'></input>
    </div>
    <div className="col-1">
    <button type="button" className= {`${styles["add1"]} btn btn-secondary add`}>Add</button>
    </div>
  </div>
}

export {AddTodo}