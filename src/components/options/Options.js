import React from "react";
import { Link } from "react-router-dom";

function Options() {
  return (
    <div className="options">
      <Link to="/workshop" className="waves-effect waves-light btn-large">
        <i class="medium material-icons">create</i>
      </Link>
      <Link
        to="/workshop/notation"
        className="waves-effect waves-light btn-large"
      >
        <i class="medium material-icons">add</i>
      </Link>
    </div>
  );
}

export default Options;
