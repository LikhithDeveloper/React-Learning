import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/Siderbar";
import Form from "./components/Forms";
import Post from "./components/Post";
import { useState, useSyncExternalStore } from "react";
import PostListProvider from "./store/Post-list";
import { Outlet } from "react-router-dom";

function App() {
  const [sidebar ,SetSidebar] = useState("Home");
  // const makeActive = (event,barName) => {
  //    console.log(event);
  //   document.querySelectorAll(".nav-link").forEach((link) => {
  //     link.classList.remove("active");
  //   });
  //   event.currentTarget.classList.add("active");
  //   console.log(event.currentTarget.value);
  // };

  const makeActive = (barname) => {
    console.log(barname);
    SetSidebar(barname);
  }
  return (
    <div className="container1">
      <PostListProvider>
      <SideBar makeActive = {makeActive} sidebar = {sidebar}></SideBar>
      <div className="inner-container">
        <Header></Header>
        <Outlet/>
        {/* {sidebar === 'Home'?<Post></Post>:<Form></Form>} */}
        <Footer></Footer>
      </div>
      </PostListProvider>
    </div>
  );
}
export default App;
