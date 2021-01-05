import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { auth } from "./firebase/firebase";
import { useStateValue } from "./redux/StateProvider";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Checkout from "./pages/checkout/Checkout";
import Login from "./pages/login/Login";
import Payment from "./pages/payment/Payment";

import "./App.css";

const promise = loadStripe(
  "pk_test_51I5ywhAx9qhczapmkB6xAE4HLmnROIXfxTtWL8qo6rvJpKLTbIsVoZuymInGmzgkugXwcDjg5btxJyLmECaQqf4F00kU5kCt8B"
);

const App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
