import { createContext } from "react"

const TodoItems = createContext();
// we can give like this also it gives auto complete
// const TodoItems = createContext({
//     items: [],
//     addItem: () => {},
//     deleteItem: () => {},
//   });
// console.log(TodoItems);

export {TodoItems};