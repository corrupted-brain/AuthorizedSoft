import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import your main App component
import "./index.css"; // Ensure this file exists, or remove this line

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
