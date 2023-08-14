import { createRoot } from "react-dom/client";
import Main from "./components/Main";
import React from "react";
import "../src/assets/stylesheets/app.scss";

const root = createRoot(
  document.getElementById("app") || document.createElement("div")
);
root.render(<Main />);
