import React from "react";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "./Options.css";

function Options({ url }) {
  return (
    <div className="options">
      <div className="option">
        <Link to={url} className="waves-effect waves-light btn-large">
          <i className="medium material-icons">create</i>
        </Link>
      </div>
      <div className="option">
        <Link
          to={`${url}/notation`}
          className="waves-effect waves-light btn-large"
        >
          <i className="medium material-icons">add</i>
        </Link>
      </div>
    </div>
  );
}

export default Options;
