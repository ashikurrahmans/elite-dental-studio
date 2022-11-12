import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContentProvider from "./ContextApi/ContentProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <ThemeContext>
  <BrowserRouter>
    <ContentProvider>
      <App />
    </ContentProvider>
  </BrowserRouter>
  // </ThemeContext>
);
