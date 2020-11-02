import React from "react";
import "./ForgotAPassword.css";
import reader from "./thinking_person.png";
function ForgotAPassword() {
  return (
    <div className="row">
      <div className="col s12 l6">
        <img className="decImage" src={reader} alt="" />
      </div>

      <div class="col s12 l6">
        <div className="row">
          <h4 className="center-align">Reset a password</h4>
        </div>
        <div className="row">
          <div className="col s9 offset-s1 l9 offset-l1 input-field">
            <i className="material-icons prefix">email</i>
            <input id="email" type="email" class="validate" />
            <label for="email">Email</label>
          </div>
        </div>
        <div className="row center-align">
          <a href="#!" class="waves-effect waves-light btn-small ">
            <i class="material-icons left">cloud</i>Reset
          </a>
        </div>
      </div>
    </div>
  );
}

export default ForgotAPassword;
