import React from "react";
import ReactDOM from "react-dom";

import reducer, { initialState } from "./redux/reducer";
import { StateProvider } from "./redux/StateProvider";

import App from "./App";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);