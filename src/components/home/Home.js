import React, { Fragment } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import M from "materialize-css/dist/js/materialize.min.js";

class Home extends React.Component {
  componentDidMount() {
    this.initializeSideNavPlugin();
  }

  initializeSideNavPlugin() {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  }

  handleSideNavChoice(event) {}

  render() {
    return (
      <Fragment>
        <nav className="navigation">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              <img src={logo} style={{ width: 210 }} alt="" />
            </Link>
            <a href="#!" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
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

        <ul class="sidenav" id="mobile-demo">
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

export default Home;
