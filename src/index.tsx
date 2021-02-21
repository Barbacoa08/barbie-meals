import { ChakraProvider } from "@chakra-ui/react";
import { setGlobal, StrictMode } from "reactn";
import ReactDOM from "react-dom";

import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import { IGlobalState } from "types";

const globalDefaults: IGlobalState = {
  showFancy: true,
  showImages: true,
  showOnlyTheBasics: true,
};
setGlobal<IGlobalState>(globalDefaults);

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root")
);

if (process.env.NODE_ENV !== "production") {
  const React = require("react");
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
