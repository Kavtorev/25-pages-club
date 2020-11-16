import React, { Fragment } from "react";
import NavigationBar from "../../components/navigationbar/NavigationBar";
import BottomNav from "../../components/bottomnavigation/BottomNav";
export default function Navigation(props) {
  return (
    <Fragment>
      <NavigationBar />
      {props.children}
      <BottomNav />
    </Fragment>
  );
}
