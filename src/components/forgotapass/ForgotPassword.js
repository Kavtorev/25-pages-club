import React from "react";
import styles from "./forgotPassword.module.css";
import reader from "./thinking_person.png";
import { Row, Col } from "react-materialize";
import cx from "classnames";
function ForgotPassword() {
  return (
    <Row>
      <Col s={12} l={6}>
        <img className="decImage" src={reader} alt="" />
      </Col>
      <Col s={12} l={6}>
        <Row>
          <h4 className="center-align">Reset a password</h4>
        </Row>
        <Row>
          <Col s={9} l={9} offset="s1 l1" className="input-field">
            <i className="material-icons prefix">email</i>
            <input id="email" type="email" class="validate" />
            <label for="email">Email</label>
          </Col>
        </Row>
        <Row className="center-align">
          <a
            href="#!"
            class={cx(
              "waves-effect",
              "waves-light",
              "btn-small",
              styles.reset__button
            )}
          >
            <i class="material-icons left">cloud</i>Reset
          </a>
        </Row>
      </Col>
    </Row>
  );
}

export default ForgotPassword;
