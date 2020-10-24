import React from "react";
import "./Notebook.css";
import M from "materialize-css";
import "materialize-css/extras/noUiSlider/nouislider.css";
import noUiSlider from "materialize-css/extras/noUiSlider/nouislider";

class Notebook extends React.Component {
  componentDidMount() {
    this.initializeCarousel();
    this.initializeRange();
  }

  initializeCarousel() {
    const elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, {});
  }

  initializeRange() {
    var slider = document.getElementById("slider");
    noUiSlider.create(slider, {
      start: [20, 80],
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
    });
  }

  render() {
    return (
      <div id="notebook" className="notebook__wrapper">
        <div className="row center-align">
          <p className="book__title truncate">
            Sapiens. A brief History of Humankind.
          </p>
        </div>
        <div className="row">
          <div className="carousel__wrapper">
            <div className="carousel">
              <a className="carousel-item" href="#one!">
                <img
                  src="https://i.insider.com/558033ac6bb3f76a7b3304f4?width=1100&format=jpeg&auto=webp"
                  alt=""
                />
              </a>
              <a className="carousel-item" href="#one!">
                <img
                  src="https://i.insider.com/558033ac6bb3f76a7b3304f4?width=1100&format=jpeg&auto=webp"
                  alt=""
                />
              </a>
              <a className="carousel-item" href="#one!">
                <img
                  src="https://i.insider.com/558033ac6bb3f76a7b3304f4?width=1100&format=jpeg&auto=webp"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="slider__margin">
          <div className="row">
            <div className="col s12 m10 offset-m1 l8 offset-l2">
              <p className="note__hint">Range of pages</p>
              <div id="slider"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m10 offset-m1 l8 offset-l2">
            <div className="input-field">
              <textarea
                id="textarea2"
                className="materialize-textarea"
                data-length="120"
              ></textarea>
              <label htmlFor="textarea2">Your thoughts</label>
            </div>
          </div>
        </div>
        <div className="row center-align">
          <a href="#!" className="waves-effect waves-light btn">
            <i className="material-icons left">cloud</i>Save
          </a>
        </div>
      </div>
    );
  }
}

export default Notebook;
