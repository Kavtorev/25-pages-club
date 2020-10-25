import React from "react";
import "../entry.css";
import "./SignIn.css";
import reader from "./undraw_book_lover_mkck.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import validate from "./validation";

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
    <div className="form_wrapper valign-wrapper">
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
                  <label htmlFor="icon_prefix">Username / Email</label>
                  <span className="helper-text">
                    {formik.touched.username ? formik.errors.username : null}
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
                  <p className="resetPassword">Forgot password?</p>
                </div>
              </div>
              <div className="row center-align">
                <button
                  type="submit"
                  name="action"
                  className="btn waves-effect waves-light"
                >
                  Log in
                </button>
              </div>
            </form>
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

export default SignIn;
