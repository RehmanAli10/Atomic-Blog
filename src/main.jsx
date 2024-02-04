import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SearchProvider } from "./contexts/SearchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
