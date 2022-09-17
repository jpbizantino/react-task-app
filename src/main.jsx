import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TaskContextsProvider } from "./context/TaskContexts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContextsProvider>
      <App />
    </TaskContextsProvider>
  </React.StrictMode>
);
