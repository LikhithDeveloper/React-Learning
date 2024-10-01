import Appdata from "./Appdata";
import styles from "./Appdatas.module.css"

function Appdatas({ todoitems , onClickDelete}) {
  // console.log(todoitems)
  return (
    <div className={`${styles['row1']}`}>
      {todoitems.map((item) => (
        <Appdata key={`${item.name}-${item.date}`} todo={item.name} tododate={item.date} onClickDelete = {onClickDelete}></Appdata>
      ))}
    </div>
  );
}

export default Appdatas;
