import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.js";
import "./SignIn.css";
import reader from "./undraw_book_lover_mkck.png";
import { Link } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameEmail: "",
      password: "",
    };
  }
  // using ES6 arrow functions in order to avoid context binding.
  handleUsernameEmailChange = (event) => {
    this.setState({ usernameEmail: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div className="flexHelper">
        <div className="container signin__register">
          <div className="row">
            <div className="col s12 m12 l6">
              <img className="decImage" src={reader} alt="" />
            </div>
            <div className="col s12 m12 l6">
              <div className="row">
                <div className="col s12">
                  <h3 className="center-align">Sign In</h3>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l10">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    id="icon_prefix"
                    type="text"
                    className="validate"
                    onChange={this.handleUsernameEmailChange}
                  />
                  <label htmlFor="icon_prefix">Username / Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l10">
                  <i className="material-icons prefix">lock_outline</i>
                  <input
                    id="password"
                    type="password"
                    className="validate"
                    autoComplete="off"
                    onChange={this.handlePasswordChange}
                  />
                  <label htmlFor="password">Password</label>
                  <p className="resetPassword">Forgot password?</p>
                </div>
              </div>
              <div className="row center-align">
                <a href="google.com" className="waves-effect waves-light btn">
                  Login
                </a>
              </div>
              <div className="row center-align">
                <Link to="/register" className="alternative">
                  {" "}
                  Register{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
