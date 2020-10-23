import React, { Fragment } from "react";
import "./Notebook.css";
import M from "materialize-css/dist/js/materialize.min.js";

class Notebook extends React.Component {
  componentDidMount() {
    this.initializePlugin();
  }

  initializePlugin() {
    var elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, {});
  }

  render() {
    return (
      <Fragment>
        <div class="carousel valign-wrapper">
          <a class="carousel-item" href="#one!">
            <img
              src="https://pbs.twimg.com/profile_images/905183271046193153/q_P1KBUJ_400x400.jpg"
              alt=""
            />
          </a>
          <a class="carousel-item" href="#one!">
            <img
              src="https://pbs.twimg.com/profile_images/905183271046193153/q_P1KBUJ_400x400.jpg"
              alt=""
            />
          </a>
          <a class="carousel-item" href="#one!">
            <img
              src="https://pbs.twimg.com/profile_images/905183271046193153/q_P1KBUJ_400x400.jpg"
              alt=""
            />
          </a>
        </div>
        <div class="input-field col s12">
          <textarea
            id="textarea2"
            class="materialize-textarea"
            data-length="120"
          ></textarea>
          <label for="textarea2">Textarea</label>
        </div>
      </Fragment>
    );
  }
}

export default Notebook;
