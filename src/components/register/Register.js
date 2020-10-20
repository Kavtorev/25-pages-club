import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.js";
import "../signin/SignIn.css";
import "./Register.css";
import reader from "./undraw_reading_0re1.png";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      retypedPassword: "",
      errors: {
        username: "",
        email: "",
        password: "",
        retypePassword: "",
      },
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleRetypedPasswordChange = (event) => {
    this.setState({ retypedPassword: event.target.value });
  };

  setError = (object) => {
    this.setState((prevState) => {
      return {
        errors: object,
      };
    });
  };

  handleOnBlur = (event) => {
    const target = event.target;
    switch (target.type) {
      case "text":
        if (!target.value.trim()) {
          // Making use of updater function since state update is asynchronous operation.
          // (to make sure that new state beses on the prevoius one)
          this.setState((prevState) => {
            return {
              errors: {
                ...prevState.errors,
                username: "Username field is required.",
              },
            };
          });

          // this.setError({})
          console.log(this.state);
        }
        break;
      case "email":
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isEmailValid = emailPattern.test(target.value);
        if (!isEmailValid) {
          this.setState((prevState) => {
            return {
              errors: {
                ...prevState.errors,
                email: "Email must match the pattern email@domain.com.",
              },
            };
          });
          console.log(this.state);
        }
        break;
      case "password":
        console.log("password");
        const passwordPattern = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
        const isPasswordValid = passwordPattern.test(target.value);
        if (!isPasswordValid) {
          this.setState((prevState) => {
            return {
              errors: {
                ...prevState.errors,
                password:
                  "Your password should contain 2 uppercase letters, 1 special character, 2 digits, 3 lowercase letters, length should be at least 8 characters",
              },
            };
          });
        }
        console.log(this.state);
        break;
      case "retype password":
        const { password, retypePassword } = this.state;
        if (!password) {
          this.setState((prevState) => {
            return {
              errors: {
                ...prevState.errors,
                retypePassword: "You should provide password above first.",
              },
            };
          });
        } else if (password !== retypePassword) {
          this.setState((prevState) => {
            return {
              errors: {
                ...prevState.errors,
                retypePassword: "Passwords must match",
              },
            };
          });
        }
        console.log(this.state);
        break;
      default:
        console.log("");
    }
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
                  <h3 className="center-align">Register</h3>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l10">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    id="icon_prefix"
                    type="text"
                    className="validate"
                    onChange={this.handleUsernameChange}
                    onBlur={this.handleOnBlur}
                  />
                  <label htmlFor="icon_prefix">Username</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">email</i>
                  <input
                    id="email"
                    type="email"
                    className="validate"
                    onChange={this.handleEmailChange}
                    onBlur={this.handleOnBlur}
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l10">
                  <i className="material-icons prefix">lock_outline</i>
                  <input
                    id="password"
                    type="password"
                    className="validate"
                    onChange={this.handlePasswordChange}
                    onBlur={this.handleOnBlur}
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l10">
                  <i className="material-icons prefix">lock_outline</i>
                  <input
                    id="password"
                    type="password"
                    className="validate"
                    onChange={this.handleRetypedPasswordChange}
                    onBlur={this.handleOnBlur}
                  />
                  <label htmlFor="password">Retype password</label>
                </div>
              </div>
              <div className="row center-align">
                <a href="google.com" className="waves-effect waves-light btn">
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
