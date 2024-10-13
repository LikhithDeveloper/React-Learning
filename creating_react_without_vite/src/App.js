import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
// import About from "./components/About";
import { Navbar } from "./components/Navbar";
import { Confirm, Orders } from "./components/Orders";
import { NoMatch } from "./components/NoMatch";
import { Cancel, Later } from "./components/Cancel";
import { User } from "./components/User";
import { UserDetails } from "./components/UserDetails";
import { Admin } from "./components/Admin";
import React from "react";
const About = React.lazy(() => import("./components/About"));

function App() {
  const error = "404 Error";
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/about"
          element={
            <React.Suspense fallback="Loading...">
              <About />
            </React.Suspense>
          }
        ></Route>
        {/* <Route path="/about" element={<About />}></Route> */}
        <Route path="/" element={<Home />} />
        {/* Nested Routes */}
        <Route path="/order" element={<Orders></Orders>}>
          <Route path="cancel" element={<Cancel></Cancel>}></Route>
          <Route path="buylater" element={<Later></Later>}></Route>
        </Route>
        <Route path="/user" element={<User />}></Route>
        {/* Routes with parameters */}
        <Route path="/user/:user" element={<UserDetails />}></Route>
        <Route path="/user/admin" element={<Admin />}></Route>
        <Route path="/confirm" element={<Confirm></Confirm>}></Route>
        <Route path="*" element={<NoMatch error={error}></NoMatch>}></Route>
      </Routes>
    </>
  );
}

export default App;
