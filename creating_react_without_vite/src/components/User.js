import { Outlet } from "react-router-dom";

export const User = () => {
  return (
    <div>
      <h1>You are in Users Page</h1>
      <h1>User 1</h1>
      <h1>User 2</h1>
      <Outlet></Outlet>
    </div>
  );
};
