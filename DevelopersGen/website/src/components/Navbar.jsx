import style from "./Navbar.module.css";
import logo from "./images/logo.png";
import insta from "./images/insta.png";
import linkedin from "./images/linkedin.png";
import email from "./images/email.png";
import "../App.css"

import { useState } from "react";

const Navbar = () => {
  const options = ["Home", "Services", "About", "Out Team", "Project"];
  const [show,setShow] = useState(true);
  function showNav(){
    setShow(!show);
  }
  return (
    <main>
      <div className={style["top-div"]}>
        <nav className={style["navbar"]}>
          <div className={style.div1}>
            <img className={style.logo} src={logo} alt="logo" />
          </div>
          <div className={style.div2}>
            {options.map((opt, index) => (
              <a href="#" key={index}>
                {opt}
              </a>
            ))}
          </div>
          <div className={style.div3}>
            <h4>Contact Us</h4>
          </div>
          <div className={style.div4}>
            <a href="#" style={{ color: "white", textDecoration: "none" }} onClick={showNav}>
              ☰
            </a>
          </div>
        </nav>
      </div>
      <div className={show?style.responsive_block:style.show}>
        <div className={style.responsive_block_div1}>
        {options.map((opt, index) => (
              <a href="#" key={index}>
                {opt}
              </a>
            ))}
        </div>
        <div className={style.responsive_block_div2}>
            <a href=""><img src={insta} style={{"width":"30px"}} /></a>
            <a href=""><img src={linkedin} style={{"width":"30px"}}/></a>
            <a href=""><img src={email} style={{"width":"30px"}}/></a>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
