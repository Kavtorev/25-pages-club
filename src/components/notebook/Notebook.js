import React, { useState } from "react";
import styles from "./notebook.module.css";
import { useHistory } from "react-router-dom";
import Carousel from "../carousel/Carousel";
import { Row, Col } from "react-materialize";
import Slider from "@material-ui/core/Slider";

function Notebook() {
  const [note, setNote] = useState("I will note it later");
  const [range, setRange] = useState([0, 100]);

  // returns a history object, which allows to force redirection (temp)
  const history = useHistory();

  const handleOnChangeTextArea = (event) => {
    if (!event.target.value.trim()) {
      setNote("I will note it later.");
    } else {
      setNote(event.target.value);
    }
  };

  const handleOnClickButton = () => {
    history.push("/workshop");
    return null;
  };

  const handleRangeChange = (_, newValue) => {
    setRange(newValue);
  };

  return (
    <div id="notebook" className={styles.notebook__wrapper}>
      <Carousel />
      <div className={styles.slider__margin}>
        <Row>
          <Col s={12} m={10} l={8} offset="m1 l2">
            <p className={styles.note__hint}>Range of pages</p>
            <Slider
              value={range}
              onChange={handleRangeChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              max={729}
            />
          </Col>
        </Row>
      </div>
      <Row>
        <Col s={12} m={10} l={8} offset="m1 l2">
          <div className="input-field">
            <i className="material-icons prefix">format_align_left</i>
            <textarea
              id="textarea2"
              className="materialize-textarea"
              data-length="120"
              onChange={handleOnChangeTextArea}
            ></textarea>
            <label htmlFor="textarea2">Your thoughts</label>
          </div>
        </Col>
      </Row>
      <Row className="center-align">
        <a
          href="#!"
          className="waves-effect waves-light btn"
          onClick={handleOnClickButton}
        >
          <i className="material-icons left">cloud</i>Save
        </a>
      </Row>
    </div>
  );
}

export default Notebook;
