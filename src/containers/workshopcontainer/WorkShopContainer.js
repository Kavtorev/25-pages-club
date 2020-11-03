import React from "react";
import RecordTable from "../../components/recordtable/RecordTable.js";
import Notebook from "../../components/notebook/Notebook";
import Options from "../../components/options/Options";
import NewRecordForm from "../..//components/newrecordform/NewRecordForm";
import StartARead from "../../components/startaread/StartARead";
import Stats from "../../components/stats/Stats";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import "./WorkShopContainer.css";

function WorkShopContainer() {
  const { path, url } = useRouteMatch();
  return (
    <main>
      <div className="wrapper container">
        <div className="row">
          <div className="col s12 m2 sticky__position">
            <Options url={url} />
          </div>
          <div className="col s12 m10 custom__margin">
            <Switch>
              <Route exact path={path}>
                <RecordTable />
              </Route>
              <Route path={`${path}/notation`}>
                <Notebook />
              </Route>
              <Route path={`${path}/add-a-record`}>
                <NewRecordForm />
              </Route>
              <Route path={`${path}/start-a-read`}>
                <StartARead />
              </Route>
              <Route path={`${path}/stats`}>
                <Stats />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </main>
  );
}

export default WorkShopContainer;
