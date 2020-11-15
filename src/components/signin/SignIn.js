import React from "react";
import styles from "./signin.module.css";
import reader from "./undraw_book_lover_mkck.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import validate from "./validation";
import { Row, Col } from "react-materialize";

function SignIn() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values), null, 2);
    },
  });

  return (
    <Row>
      <Col s={12} m={12} l={6}>
        <img className="decImage" src={reader} alt="" />
      </Col>
      <Col s={12} m={12} l={6}>
        <Row>
          <Col s={12}>
            <h3 className="center-align">Sign In</h3>
          </Col>
        </Row>
        <form onSubmit={formik.handleSubmit}>
          <Row>
            <Col s={12} m={12} l={10} className="input-field">
              <i className="material-icons prefix">account_circle</i>
              <input
                id="icon_prefix"
                type="text"
                name="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                required
              />
              <label htmlFor="icon_prefix">Username / Email</label>
              <span className="helper-text">
                {formik.touched.username ? formik.errors.username : null}
              </span>
            </Col>
          </Row>
          <Row>
            <Col s={12} m={12} l={10} className="input-field">
              <i className="material-icons prefix">lock_outline</i>
              <input
                id="password"
                type="password"
                name="password"
                autoComplete="off"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                required
              />
              <label htmlFor="password">Password</label>
              <span className="helper-text">
                {formik.touched.password ? formik.errors.password : null}
              </span>
              <Link to="/reset-password" className={styles.resetPassword}>
                Forgot a password?
              </Link>
            </Col>
          </Row>
          <Row className="center-align">
            <button
              type="submit"
              name="action"
              className="btn waves-effect waves-light form__submitButton"
            >
              Log in
            </button>
          </Row>
        </form>
        <Row className="center-align">
          <Link to="/register" className="alternative">
            Register
          </Link>
        </Row>
      </Col>
    </Row>
  );
}

export default SignIn;
