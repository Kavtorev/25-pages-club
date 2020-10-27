import React, { useEffect, useState } from "react";
import "./Notebook.css";
import M from "materialize-css";
import "materialize-css/extras/noUiSlider/nouislider.css";
import noUiSlider from "materialize-css/extras/noUiSlider/nouislider";
import { useHistory } from "react-router-dom";
import Carousel from "../carousel/Carousel";

function Notebook() {
  const [note, setNote] = useState("I will note it later");
  const [range, setRange] = useState({
    start: 0,
    end: 0,
  });

  // returns a history object, which allows to force redirection (temp)
  const history = useHistory();

  useEffect(() => {
    const slider = initializeRange();
    bindEventListenerSlider(slider);
  }, []);

  const initializeRange = () => {
    const slider = document.getElementById("slider");
    noUiSlider.create(slider, {
      start: [0, 80],
      step: 1,
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
      format: {
        from: function (value) {
          return parseInt(value);
        },
        to: function (value) {
          return parseInt(value);
        },
      },
    });

    // referring to the documentation, this is one of the possible ways to bind an event listener
    return slider;
  };

  const bindEventListenerSlider = (slider) => {
    slider.noUiSlider.on("update", (values) => {
      setRange((prevState) => {
        const rangeObject = {
          start: values[0],
          end: values[1],
        };
        return { ...prevState, ...rangeObject };
      });
    });
  };

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

  return (
    <div id="notebook" className="notebook__wrapper">
      <Carousel />
      <div className="slider__margin">
        <div className="row">
          <div className="col s12 m10 offset-m1 l8 offset-l2">
            <p className="note__hint">Range of pages</p>
            <div className="input-field">
              <div id="slider"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m10 offset-m1 l8 offset-l2">
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
        </div>
      </div>
      <div className="row center-align">
        <a
          href="#!"
          className="waves-effect waves-light btn"
          onClick={handleOnClickButton}
        >
          <i className="material-icons left">cloud</i>Save
        </a>
      </div>
    </div>
  );
}

export default Notebook;
