import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Create a root only once
const root = createRoot(document.getElementById("root"));

function unmount() {
  root.render(<p>Component Unmounted</p>); // Reuse the existing root
}

root.render(
  // <StrictMode>
  <div>
    <App />
    <button onClick={unmount}>clean Up</button>
  </div>
  // </StrictMode>
);
