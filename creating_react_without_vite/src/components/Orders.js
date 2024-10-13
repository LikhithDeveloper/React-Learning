import { Link, Outlet, useNavigate } from "react-router-dom";

export const Orders = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Select Order</h1>
      <Link to={"/order/cancel"}>Cancel Product</Link>
      <Link to={"/order/buylater"}>Buy it later</Link>
      <br></br>
      <Outlet></Outlet>
      <button onClick={() => navigate("/confirm")}>Place Order</button>
    </>
  );
};

export const Confirm = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Order Confirmed</h1>
      <button onClick={() => navigate("/")}>Go To Home</button>
      <button onClick={() => navigate("/order")}>Return to shop</button>
    </>
  );
};
