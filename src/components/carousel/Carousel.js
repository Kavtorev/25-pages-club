import React, { useEffect, Fragment, useState } from "react";
import M from "materialize-css";
import "./Carousel.css";

function Carousel() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    initializeCarousel();
  }, []);

  const initializeCarousel = () => {
    const elems = document.querySelectorAll(".carousel");
    const options = {
      dist: -10,
      // a great way to track current book
      onCycleTo: function (event) {
        const name = event.getAttribute("name");
        setTitle(name);
      },
    };
    M.Carousel.init(elems, options);
  };

  return (
    <Fragment>
      <div className="row center-align booktitle__wrapper">
        <p className="book__title truncate">{title}</p>
      </div>
      <div className="row">
        <div className="carousel">
          <a
            className="carousel-item"
            href="#one!"
            name="Homo Sapiens a brief history of HumanKind"
          >
            <img
              src="https://i.insider.com/558033ac6bb3f76a7b3304f4?width=1100&format=jpeg&auto=webp"
              alt=""
            />
          </a>
          <a
            className="carousel-item"
            href="#one!"
            name="Homo Deus a brief history of Future"
          >
            <img
              src="https://i.insider.com/558033ac6bb3f76a7b3304f4?width=1100&format=jpeg&auto=webp"
              alt=""
            />
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default Carousel;
