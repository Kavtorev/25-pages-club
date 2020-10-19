import React from "react";
import "./App.css";
import Register from "./components/register/Register.js";
import { Switch, Route } from "react-router-dom";
import SignIn from "./components/signin/SignIn.js";
import Home from "./components/home/Home.js";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/signin" component={SignIn} />
    </Switch>
  );
}

export default App;
