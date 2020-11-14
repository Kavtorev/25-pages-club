import React, { useEffect } from "react";
import Carousel from "../carousel/Carousel";
import styles from "./newRecordForm.module.css";
import M from "materialize-css";
import { Row, Col } from "react-materialize";
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
      <div className={styles.newrecord__form}>
        <Row>
          <Carousel />
        </Row>
        <Row>
          <Col s={12} m={10} l={8} offset="m1 l2" className="input-field">
            <i className="material-icons prefix">date_range</i>
            <input id="date" type="text" className="datepicker" />
            <label htmlFor="date">Choose a date</label>
          </Col>
        </Row>
        <Row>
          <Col s={12} m={8} l={4} offset="m1 l2" className="input-field">
            <i className="material-icons prefix">chevron_right</i>
            <input
              placeholder="another 25"
              type="number"
              className="validate"
            />
          </Col>
        </Row>
        <Row>
          <Col s={12} m={10} l={8} offset="m1 l2" className="input-field">
            <i className="material-icons prefix">format_align_left</i>
            <textarea
              id="textarea1"
              className="materialize-textarea"
            ></textarea>
            <label htmlFor="textarea1">Comments</label>
          </Col>
        </Row>
        <Row className="center-align">
          <a href="#!" className="waves-effect waves-light btn">
            <i className="material-icons left">cloud</i>Save
          </a>
        </Row>
      </div>
    </form>
  );
}

export default NewRecordForm;
