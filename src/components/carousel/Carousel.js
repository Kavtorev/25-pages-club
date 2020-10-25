import React, { useEffect, Fragment } from "react";
import M from "materialize-css";
import "./Carousel.css";

function Carousel() {
  useEffect(() => {
    initializeCarousel();
  }, []);

  const initializeCarousel = () => {
    const elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, {});
  };
  return (
    <Fragment>
      <div className="row center-align booktitle__wrapper">
        <p className="book__title truncate">
          Sapiens. A brief History of Humankind.
        </p>
      </div>
      <div className="row">
        <div className="carousel">
          <a className="carousel-item" href="#one!">
            <img
              src="https://i.insider.com/558033ac6bb3f76a7b3304f4?width=1100&format=jpeg&auto=webp"
              alt=""
            />
          </a>
          <a className="carousel-item" href="#one!">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/714Pp4S+nWL.jpg"
              alt=""
            />
          </a>
          <a className="carousel-item" href="#one!">
            <img
              src="https://m.media-amazon.com/images/I/41k+WVPLwZL.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default Carousel;
