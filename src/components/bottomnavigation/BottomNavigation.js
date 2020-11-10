import React from "react";
import "./BottomNavigation.css";
import { Link, useRouteMatch } from "react-router-dom";

function BottomNavigation() {
  const { url } = useRouteMatch();
  return (
    <div className="bottom__navigation hide-on-med-and-up">
      <div className="circle waves-effect waves-green">
        <Link to={`${url}/start-a-read`}>
          <i className="fas fa-book"></i>
        </Link>
      </div>
      <div className="circle waves-effect waves-green">
        <Link to={`${url}/notation`}>
          <i className="fas fa-pencil-alt"></i>
        </Link>
      </div>
      <div className="circle waves-effect waves-green">
        <Link to={`${url}/add-a-record`}>
          <i className="far fa-plus-square"></i>
        </Link>
      </div>
      <div className="circle waves-effect waves-green">
        <Link to={`${url}`}>
          <i className="fas fa-table"></i>
        </Link>
      </div>
      <div className="circle waves-effect waves-green">
        <Link to={`${url}/stats`}>
          <i className="fas fa-chart-line"></i>
        </Link>
      </div>
    </div>
  );
}

export default BottomNavigation;
