import { createRoot } from "react-dom/client";
import Main from "./Main";
import React from "react";

const root = createRoot(
  document.getElementById("app") || document.createElement("div")
);
root.render(<Main />);
