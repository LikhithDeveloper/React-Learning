import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, [count < 2 ? 0 : count]);

  useEffect(() => {
    console.log("Moundted");

    return () => console.log("Unmounted/Updated");
  }, [count]);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => increment()}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
