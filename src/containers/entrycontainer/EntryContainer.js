import React from "react";
import "./EntryContainer.css";

function EntryContainer(props) {
  return (
    <div className="form_wrapper valign-wrapper">
      <div className="container template__container">{props.children}</div>
    </div>
  );
}

export default EntryContainer;
