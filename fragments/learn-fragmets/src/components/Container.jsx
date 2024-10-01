import styles from "./Container.module.css";

const Container = ({ children }) => {
  return <div className={styles.container}><h6 style={{textAlign:"center"}}>welcome To Food stall</h6>{ children }</div>;
};

export default Container;
