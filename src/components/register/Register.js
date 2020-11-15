import React from "react";
import reader from "./undraw_reading_0re1.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import validate from "./validation";
import { Row, Col } from "react-materialize";

function Register() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      retypedPassword: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("Something is happening");
      alert(JSON.stringify(values, null, 2));
    },
  });
  // register second nested
  return (
    <Row>
      <Col s={12} m={12} l={6}>
        <img className="decImage" src={reader} alt="" />
      </Col>
      <Col s={12} m={12} l={6}>
        <Row>
          <Col s={12}>
            <h3 className="center-align">Register</h3>
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
              <label htmlFor="icon_prefix">Username</label>
              <span className="helper-text">
                {formik.touched.username ? formik.errors.username : null}
              </span>
            </Col>
          </Row>
          <Row>
            <Col s={12} m={12} l={10} className="input-field">
              <i className="material-icons prefix">email</i>
              <input
                id="email"
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                required
              />
              <label htmlFor="email">Email</label>
              <span className="helper-text">
                {formik.touched.email ? formik.errors.email : null}
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
                className="validate"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                autoComplete="off"
                required
              />
              <label htmlFor="password">Password</label>
              <span className="helper-text">
                {formik.touched.password ? formik.errors.password : null}
              </span>
            </Col>
          </Row>
          <Row>
            <Col s={12} m={12} l={10} className="input-field">
              <i className="material-icons prefix">lock_outline</i>
              <input
                id="retypedPassword"
                type="password"
                name="retypedPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.retypedPassword}
                autoComplete="off"
                required
              />
              <label htmlFor="retypedPassword">Retype password</label>
              <span className="helper-text">
                {formik.touched.retypedPassword
                  ? formik.errors.retypedPassword
                  : null}
              </span>
            </Col>
          </Row>
          <Row className="center-align">
            <button
              type="submit"
              name="action"
              className="btn waves-effect waves-light form__submitButton"
            >
              Register
            </button>
          </Row>
        </form>
        <Row className="center-align">
          <Link to="/signin" className="alternative">
            {" "}
            Sign In{" "}
          </Link>
        </Row>
      </Col>
    </Row>
  );
}

export default Register;
