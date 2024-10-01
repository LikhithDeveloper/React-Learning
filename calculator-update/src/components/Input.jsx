import styles from "./Input.module.css";

const Input = ({ display }) => {
  return (
    <>
      <input
        className={styles.input}
        type="text"
        value={display}
        readOnly
      ></input>
    </>
  );
};

export default Input;
