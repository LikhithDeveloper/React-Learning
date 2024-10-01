import styles from "./Button.module.css";

const Button = ({ list , onClickButton}) => {
  return (
    <>
      {/* <div className={styles.inner-div}> */}
      {list.map((button, index) => (
        <button key={index} className={styles.button} onClick={() => onClickButton(button)}>
          {button}
        </button>
      ))}
      {/* </div> */}
    </>
  );
};

export default Button;
