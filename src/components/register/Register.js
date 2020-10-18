import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.js";
import "../signin/SignIn.css";
import "./Register.css";
import reader from "./undraw_reading_0re1.png";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div className="flexHelper">
        <div className="container">
          <div className="row">
            <div className="col s12 m12 l6">
              <img className="decImage" src={reader} alt="" />
            </div>
            <div className="col s12 m12 l6">
              <div className="row">
                <div className="col s12">
                  <h3 className="center-align">Register</h3>
                </div>
              </div>
              <div className="row">
                <div class="input-field col s12 m12 l10">
                  <i class="material-icons prefix">account_circle</i>
                  <input id="icon_prefix" type="text" class="validate" />
                  <label htmlFor="icon_prefix">Username</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">email</i>
                  <input id="email" type="email" class="validate" />
                  <label for="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div class="input-field col s12 m12 l10">
                  <i class="material-icons prefix">lock_outline</i>
                  <input
                    id="password"
                    type="password"
                    class="validate"
                    autoComplete="off"
                    readOnly
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row">
                <div class="input-field col s12 m12 l10">
                  <i class="material-icons prefix">lock_outline</i>
                  <input
                    id="password"
                    type="password"
                    class="validate"
                    autoComplete="off"
                  />
                  <label htmlFor="password">Retype password</label>
                </div>
              </div>
              <div className="row center-align">
                <a href="google.com" class="waves-effect waves-light btn">
                  Register
                </a>
              </div>
              <div className="row center-align">
                <Link to="/signin" className="alternative">
                  {" "}
                  Sign In{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
