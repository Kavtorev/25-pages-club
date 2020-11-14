import React, { useEffect, Fragment, useState } from "react";
import M from "materialize-css";
import styles from "./carousel.module.css";
import { Row, Col } from "react-materialize";
import cx from "classnames";

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
      <Row className={cx("row", "center-align", styles.booktitle__wrapper)}>
        <p className={cx(styles.book__title, "truncate")}>{title}</p>
      </Row>
      <Row>
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
      </Row>
    </Fragment>
  );
}

export default Carousel;
