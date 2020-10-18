import React from "react";
import "./App.css";
import Register from "./components/register/Register";
import { Switch, Route } from "react-router-dom";
import SignIn from "./components/signin/SignIn.js";

function App() {
  return (
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/signin" component={SignIn} />
    </Switch>
  );
}

export default App;
