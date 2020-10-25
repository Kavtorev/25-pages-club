import React, { Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Register from "./components/entry/register/Register.js";
import { Switch, Route } from "react-router-dom";
import SignIn from "./components/entry/signin/SignIn.js";
import NavigationBar from "./components/navigationbar/NavigationBar";
import WorkShopContainer from "./containers/workshopcontainer/WorkShopContainer";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/workshop">
          <NavigationBar />
          <WorkShopContainer />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
