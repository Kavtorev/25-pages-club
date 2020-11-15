import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { makeStyles } from "@material-ui/core/styles";
import cx from "classnames";
import styles from "./bottomNav.module.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 2,
  },
});

const buttons = [
  {
    label: "Start",
    icon: <i className="fas fa-book"></i>,
    link: "/start-a-read",
  },
  {
    label: "Note",
    icon: <i className="fas fa-pencil-alt"></i>,
    link: "/notation",
  },
  { label: "Records", icon: <i className="fas fa-table"></i>, link: "" },
  {
    label: "Stats",
    icon: <i className="fas fa-chart-line"></i>,
    link: "/stats",
  },
  {
    label: "New record",
    icon: <i className="far fa-plus-square"></i>,
    link: "/add-a-record",
  },
];

function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { url } = useRouteMatch();

  const handleRouteChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleRouteChange}
      showLabels
      className={cx(
        classes.root,
        "hide-on-med-and-up",
        styles.disable__buttonFocus,
        styles.bottomNav__buttons
      )}
    >
      {buttons.map((btn) => {
        return (
          <BottomNavigationAction
            label={btn.label}
            icon={btn.icon}
            component={Link}
            to={`${url}${btn.link}`}
          ></BottomNavigationAction>
        );
      })}
    </BottomNavigation>
  );
}

export default BottomNav;
