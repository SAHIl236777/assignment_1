import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import App component
import "./App.css"; // Import App component styles
import "./index.css"; // Import index styles
import "./styles/styles.css"; // Import global styles

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
