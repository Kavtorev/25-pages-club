import React from "react";
import "../entry.css";
import "./Register.css";
import reader from "./undraw_reading_0re1.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import validate from "./validation";

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

  return (
    <div className="form_wrapper valign-wrapper">
      <div className="container signin__register register">
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
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="input-field col s12 m12 l10">
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
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l10">
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
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l10">
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
                </div>
              </div>
              <div className="row">
                <div className="input-field last__input col s12 m12 l10">
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
                </div>
              </div>
              <div className="row center-align">
                <button
                  type="submit"
                  name="action"
                  className="btn waves-effect waves-light"
                >
                  Register
                </button>
              </div>
            </form>
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

export default Register;
