import React from "react";
import { Link } from "react-router-dom";
import "./Options.css";

function Options({ url }) {
  return (
    <div className="options hide-on-small-and-down">
      <div className="option">
        <Link
          to={`${url}/stats`}
          className="waves-effect waves-green btn-large"
        >
          <i class="fas fa-chart-line"></i>
          <p>Stats</p>
        </Link>
      </div>
      <div className="option">
        <Link to={url} className="waves-effect waves-red btn-large">
          <i class="fas fa-table"></i>
          <p>Records</p>
        </Link>
      </div>
      <div className="option">
        <Link
          to={`${url}/notation`}
          className="waves-effect waves-orange btn-large"
        >
          <i class="fas fa-pencil-alt"></i>
          <p>Note</p>
        </Link>
      </div>
      <div className="option">
        <Link
          to={`${url}/add-a-record`}
          className="waves-effect waves-purple btn-large"
        >
          <i class="far fa-plus-square"></i>
          <p>Progress</p>
        </Link>
      </div>
      <div className="option">
        <Link
          to={`${url}/start-a-read`}
          className="waves-effect waves-green btn-large"
        >
          <i class="fas fa-book"></i>
          <p>Start</p>
        </Link>
      </div>
    </div>
  );
}

export default Options;
