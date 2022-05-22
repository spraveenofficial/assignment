import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SurveyContextProvider } from "./Context/survey-context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SurveyContextProvider>
    <App />
  </SurveyContextProvider>
);
