import styles from "./Button.module.css"

const Button = (props) => {
  return (
    <>
      {/* <div className={styles.inner-div}> */}
        {props.list.map((button,index) => <button key={index} className={styles.button} onClick={() => console.log(button)}>{button}</button>)}
      {/* </div> */}
    </>
  );
};

export default Button;
