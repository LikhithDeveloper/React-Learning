import styles from "./Input.module.css";

// normal function inside the component

// const Input = () => {

//     const change = (event) => {
//         console.log(event.target.value)
//     }

//     return<input
//     type="text"
//     placeholder="Enter the food item"
//     onChange={change}
//     className={styles.input}
//     ></input>
// }


// function passed as a prop

const Input = ({change}) => {

    return<input
    type="text"
    placeholder="Enter the food item"
    onKeyDown={change}
    className={styles.input}
    ></input>
}

export default Input;