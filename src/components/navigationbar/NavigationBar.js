import React from "react";
import styles from "./navBar.module.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { Navbar, Icon, NavItem } from "react-materialize";

function NavigationBar(props) {
  return (
    <Navbar
      alignLinks="right"
      brand={
        <Link to="/" className="brand-logo">
          <img src={logo} style={{ width: 80 }} alt="" />
        </Link>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
      className={styles.navigation}
    >
      <NavItem>
        <Link to="/shelf" className="sidenav-close">
          Shelf
        </Link>
      </NavItem>

      <NavItem>
        <Link to="/workshop" className="sidenav-close">
          Table
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/workshop/notation" className="sidenav-close">
          Add a new note
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/workshop/add-a-record" className="sidenav-close">
          Another 25 pages
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/workshop/start-a-read" className="sidenav-close">
          Start a read
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/signin" className="sidenav-close">
          Sign In
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/register" className="sidenav-close">
          Sign Up
        </Link>
      </NavItem>
    </Navbar>
  );
}

export default NavigationBar;
