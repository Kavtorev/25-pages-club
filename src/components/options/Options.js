import React from "react";
import { Link } from "react-router-dom";
import "./Options.css";

function Options({ url }) {
  return (
    <div className="options">
      <div className="option">
        <Link
          to={`${url}/stats`}
          className="waves-effect waves-green btn-large"
        >
          <i className="medium material-icons">book</i>
          <p>Stats</p>
        </Link>
      </div>
      <div className="option">
        <Link to={url} className="waves-effect waves-red btn-large">
          <i className="medium material-icons">event_note</i>
          <p>Records</p>
        </Link>
      </div>
      <div className="option">
        <Link
          to={`${url}/notation`}
          className="waves-effect waves-orange btn-large"
        >
          <i className="medium material-icons">note_add</i>
          <p>Note</p>
        </Link>
      </div>
      <div className="option">
        <Link
          to={`${url}/add-a-record`}
          className="waves-effect waves-purple btn-large"
        >
          <span class="dot">+25</span>
          <p>Progress</p>
        </Link>
      </div>
      <div className="option">
        <Link
          to={`${url}/start-a-read`}
          className="waves-effect waves-green btn-large"
        >
          <i className="medium material-icons">book</i>
          <p>Start</p>
        </Link>
      </div>
    </div>
  );
}

export default Options;
