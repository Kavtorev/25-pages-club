import React, { useEffect } from "react";
import Carousel from "../carousel/Carousel";
import "./NewRecordForm.css";
import M from "materialize-css";
function NewRecordForm() {
  useEffect(() => {
    initializeDatePicker();
  });

  const initializeDatePicker = () => {
    const elems = document.querySelectorAll(".datepicker");
    M.Datepicker.init(elems, {});
  };

  return (
    <form>
      <div className="newrecord__form">
        <div className="row">
          <Carousel />
        </div>
        <div className="row">
          <div className="input-field col s12 m10 offset-m1 l8 offset-l2">
            <input id="date" type="text" class="datepicker" />
            <label htmlFor="date">Choose date</label>
          </div>
        </div>
        <div className="row">
          <div class="input-field col s12 m8 offset-m1 l4 offset-l2">
            <input
              placeholder="another 25"
              id="first_name"
              type="number"
              class="validate"
            />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12 m10 offset-m1 l8 offset-l2">
            <textarea id="textarea1" class="materialize-textarea"></textarea>
            <label for="textarea1">Comments</label>
          </div>
        </div>
        <div className="row center-align">
          <a href="#!" className="waves-effect waves-light btn">
            <i className="material-icons left">cloud</i>Save
          </a>
        </div>
      </div>
    </form>
  );
}

export default NewRecordForm;
