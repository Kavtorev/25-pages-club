import React, { Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavigationBar from "./components/navigationbar/NavigationBar";
import SignIn from "./components/signin/SignIn.js";
import Register from "./components/register/Register.js";
import ForgotAPassword from "./components/forgotapass/ForgotAPassword";
import WorkShopContainer from "./containers/workshopcontainer/WorkShopContainer";
import EntryContainer from "./containers/entrycontainer/EntryContainer";
import BottomNavigation from "./components/bottomnavigation/BottomNavigation";

const renderEntryContainer = (component) => {
  return <EntryContainer>{component}</EntryContainer>;
};

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/">
          <EntryContainer />
        </Route>
        <Route path="/workshop">
          <NavigationBar />
          <WorkShopContainer />
          <BottomNavigation />
        </Route>
        <Route path="/signin">{renderEntryContainer(<SignIn />)}</Route>
        <Route path="/register">{renderEntryContainer(<Register />)}</Route>
        <Route path="/reset-password">
          {renderEntryContainer(<ForgotAPassword />)}
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
