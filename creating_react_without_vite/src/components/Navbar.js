import { NavLink } from "react-router-dom";
// import { Link } from 'react-router-dom';
import "../App.css";

export const Navbar = () => {
  // return <nav>
  //     <Link to={'/'}>Home</Link>
  //     <Link to={'/about'}>About</Link>
  // </nav>
  return (
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/order"}>Orders</NavLink>
      <NavLink to={"/confirm"}>Confirm Order</NavLink>
    </nav>
  );
};
