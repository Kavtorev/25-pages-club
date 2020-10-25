import React, { Fragment } from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import M from "materialize-css";

class NavigationBar extends React.Component {
  componentDidMount() {
    this.initializeSideNavPlugin();
  }

  initializeSideNavPlugin() {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  }

  render() {
    return (
      <Fragment>
        <nav className="navigation">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              <img src={logo} style={{ width: 210 }} alt="" />
            </Link>
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/signin" className="">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/register" className="">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to="/signin" className="sidenav-close">
              Sign In
            </Link>
          </li>
          <li>
            <Link to="/register" className="sidenav-close">
              Sign Up
            </Link>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default NavigationBar;
