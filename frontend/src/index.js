// ~~~ React Libraries ~~~ //
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AuthContextProvider } from "./context/auth/authContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <AuthContextProvider>
    <App />
	</AuthContextProvider>
  </React.StrictMode>
);
