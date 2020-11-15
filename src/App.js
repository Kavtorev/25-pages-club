import React, { Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignIn from "./components/signin/SignIn.js";
import Register from "./components/register/Register.js";
import ForgotPassword from "./components/forgotapass/ForgotPassword";
import WorkShopContainer from "./containers/workshopcontainer/WorkShopContainer";
import EntryContainer from "./containers/entrycontainer/EntryContainer";
import Navigation from "./containers/navigationcontainer/Navigation";
import Shelf from "./components/shelf/Shelf";
import FinishedBook from "./components/finishedbook/FinishedBook";
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
          <Navigation>
            <WorkShopContainer />
          </Navigation>
        </Route>
        <Route path="/shelf">
          <Navigation>
            <Shelf />
          </Navigation>
        </Route>
        <Route path="/tmp">
          <Navigation>
            <FinishedBook />
          </Navigation>
        </Route>
        <Route path="/signin">{renderEntryContainer(<SignIn />)}</Route>
        <Route path="/register">{renderEntryContainer(<Register />)}</Route>
        <Route path="/reset-password">
          {renderEntryContainer(<ForgotPassword />)}
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
