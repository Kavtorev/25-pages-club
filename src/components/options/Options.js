import React from "react";
import { Link } from "react-router-dom";
import "./Options.css";

function Options({ url }) {
  return (
    <div className="options">
      <div className="option">
        <Link to={url} className="waves-effect waves-light btn-large">
          <i className="medium material-icons">book</i>
          <p>Records</p>
        </Link>
      </div>
      <div className="option">
        <Link
          to={`${url}/notation`}
          className="waves-effect waves-light btn-large"
        >
          <i className="medium material-icons">create</i>
          <p>Note</p>
        </Link>
      </div>
      <div className="option">
        <Link
          to={`${url}/add-record`}
          className="waves-effect waves-light btn-large"
        >
          <i className="medium material-icons">add</i>
          <p>+Log</p>
        </Link>
      </div>
    </div>
  );
}

export default Options;
