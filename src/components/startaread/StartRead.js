import React, { useEffect, useState } from "react";
import styles from "./startRead.module.css";
import M from "materialize-css";
import reader from "./reading_person.png";
import { Row, Col } from "react-materialize";
import cx from "classnames";

function StartARead() {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("Your new beginning is...");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    initializeDatePicker();
  }, []);

  const initializeDatePicker = () => {
    const elems = document.querySelectorAll(".datepicker");
    M.Datepicker.init(elems, {});
  };

  const handleOnChangeImageUrl = (event) => {
    console.log(event.target.value);
    setImageUrl(event.target.value);
  };

  const handleOnChangeBookName = (event) => {
    setTitle(`Your new beginning is: ${event.target.value}`);
  };

  const handleOnChangeAuthor = (event) => {
    setAuthor(`written by: ${event.target.value}`);
  };

  return (
    <div>
      <Row>
        <p className={cx(styles.title, styles.title__text, "truncate")}>
          {title}
        </p>
        <p className={cx(styles.author)}>{author}</p>
      </Row>
      <Row>
        <Col s={12} l={6}>
          <Row className={styles.image__cover}>
            <Col s={8} offset="s2">
              {!imageUrl.trim() ? (
                <img src={reader} alt="" className={styles.book__cover} />
              ) : (
                <img src={imageUrl} alt="" className={styles.book__cover} />
              )}
            </Col>
          </Row>
        </Col>
        <Col s={12} l={6}>
          {/* m={8} */}
          {/* offset="m2" */}
          <Row>
            <Col s={12} m={9} className="input-field">
              <i class="material-icons prefix">chevron_left</i>
              <input
                id="numOfpages"
                type="number"
                className="validate"
                // placeholder="729"
              />
              <label htmlFor="numOfpages">Number of pages in a book.</label>
            </Col>
          </Row>
          <Row>
            <Col s={12} className="input-field">
              <i class="material-icons prefix">person_outline</i>
              <input
                id="author"
                type="text"
                className="validate"
                onChange={handleOnChangeAuthor}
                // placeholder="Jules Verne"
              />
              <label htmlFor="author">Author</label>
            </Col>
          </Row>
          <Row>
            <Col s={12} className="input-field">
              <i class="material-icons prefix">local_library</i>
              <input
                id="book"
                type="text"
                className="validate"
                onChange={handleOnChangeBookName}
                // placeholder="Mysterious Island"
              />
              <label htmlFor="book">Book</label>
            </Col>
          </Row>
          <Row>
            <Col s={12} className="input-field">
              <i class="material-icons prefix">date_range</i>
              <input id="date" type="text" className="datepicker" />
              <label htmlFor="date">
                Choose a date when you would like to start a read.
              </label>
            </Col>
          </Row>
          <Row>
            <Col s={12} className="input-field">
              <i class="material-icons prefix">filter</i>
              <input
                id="cover"
                type="text"
                // placeholder="https://image.png"
                className="validate"
                onChange={handleOnChangeImageUrl}
              />
              <label htmlFor="cover">Image of a book's cover Url</label>
            </Col>
          </Row>
          <Row className={cx("center-align", styles.custom__margin)}>
            <a href="#!" className="waves-effect waves-light btn">
              <i className="material-icons left">cloud</i>Save
            </a>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default StartARead;
