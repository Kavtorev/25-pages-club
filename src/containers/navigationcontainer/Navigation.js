import React, { Fragment } from "react";
import NavigationBar from "../../components/navigationbar/NavigationBar";
import BottomNavigation from "../../components/bottomnavigation/BottomNavigation";

export default function Navigation(props) {
  return (
    <Fragment>
      <NavigationBar />
      {props.children}
      <BottomNavigation />
    </Fragment>
  );
}
