import React from "react";
import RecordTable from "../../components/recordtable/RecordTable.js";
import Notebook from "../../components/notebook/Notebook";
import Options from "../../components/options/Options";
import { Switch, Route } from "react-router-dom";
import "./WorkShopContainer.css";

function WorkShopContainer() {
  return (
    <div className="wrapper valign-wrapper">
      <div className="container">
        <div className="row">
          <div className="col s12 m2">
            <Options />
          </div>
          <div className="col s12 m10">
            <Switch>
              <Route exact path="/workshop">
                <RecordTable />
              </Route>
              <Route path="/workshop/notation">
                <Notebook />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkShopContainer;
