import React from "react";
import RecordTable from "../../components/recordtable/RecordTable.js";
import Notebook from "../../components/notebook/Notebook";
import Options from "../../components/options/Options";
import NewRecordForm from "../..//components/newrecordform/NewRecordForm";
import StartARead from "../../components/startaread/StartRead";
import Stats from "../../components/stats/Stats";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import styles from "./workshopContainer.css";
import cx from "classnames";
import { Row, Col } from "react-materialize";

function WorkShopContainer() {
  const { path, url } = useRouteMatch();
  return (
    <main>
      <div className={cx(styles.wrapper, "container")}>
        <Row>
          <Col s={12} m={2} className={styles.sticky__position}>
            <Options url={url} />
          </Col>
          <Col s={12} m={10} className={styles.custom__margin}>
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
          </Col>
        </Row>
      </div>
    </main>
  );
}

export default WorkShopContainer;
