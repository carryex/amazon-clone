import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";

import "./App.css";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
