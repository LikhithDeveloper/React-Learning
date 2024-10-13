import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Form from "./components/Forms.jsx";
import Post from "./components/Post.jsx";

// import './index.css'

// we create routes like this
// const router = createBrowserRouter([
//   {path:"/",element: <App/>},
//   {path:"/create-post", element:<Form/>}
// ])

const router = createBrowserRouter([
  { path: "/", element: <App />, children: [
    {path:"/",element:<Post></Post>},
    {path:"/create-post",element:<Form></Form>}
  ] },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
