import Appdata from "./Appdata";
import styles from "./Appdatas.module.css"

function Appdatas({ todoitems }) {
  // console.log(todoitems)
  return (
    <div className={`${styles['row1']}`}>
      {todoitems.map((item) => (
        <Appdata key={item} todo={item.name} tododate={item.date}></Appdata>
      ))}
    </div>
  );
}

export default Appdatas;
