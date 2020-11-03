import React from "react";
import "./BottomNavigation.css";
import { Link, useRouteMatch } from "react-router-dom";
function BottomNavigation() {
  const { url } = useRouteMatch();
  return (
    <div class="bottom__navigation hide-on-med-and-up">
      <div className="circle waves-effect waves-green">
        <Link to={`${url}/start-a-read`}>
          <i class="fas fa-book"></i>
        </Link>
      </div>
      <div class="circle waves-effect waves-green">
        <Link to={`${url}/notation`}>
          <i class="fas fa-pencil-alt"></i>
        </Link>
      </div>
      <div class="circle waves-effect waves-green">
        <Link to={`${url}/add-a-record`}>
          <i class="far fa-plus-square"></i>
        </Link>
      </div>
      <div class="circle waves-effect waves-green">
        <Link to={`${url}`}>
          <i class="fas fa-table"></i>
        </Link>
      </div>
      <div class="circle waves-effect waves-green">
        <Link to={`${url}/stats`}>
          <i class="fas fa-chart-line"></i>
        </Link>
      </div>
    </div>
  );
}

export default BottomNavigation;
