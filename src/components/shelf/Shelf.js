import React, { useEffect, useState } from "react";
import M from "materialize-css";
// import Carousel from "../carousel/Carousel";
import styles from "./shelf.module.css";
// cx() - allows to combine css-module classes and the ones belonging to materializecss
import cx from "classnames";
import { Row, Col } from "react-materialize";

export default function Shelf() {
  const [curTab, setCurTab] = useState("");

  useEffect(() => {
    initializeTabs();
  }, []);

  const initializeTabs = () => {
    const el = document.querySelector(".tabs");
    M.Tabs.init(el, {});
  };

  const handleOnTabChange = (event) => {
    const fullUrl = event.target.href;
    const parsedUrl = fullUrl.slice(
      fullUrl.indexOf("#", -1) + 1,
      fullUrl.length
    );

    setCurTab(parsedUrl);
  };

  return (
    <div className={cx("container", styles.padding__top)}>
      <Row>
        <Col s={12}>
          <ul className={cx(styles.custom__tabs, "tabs")}>
            <li className={cx(styles.custom__tab, "tab col s3")}>
              <a
                href="#read"
                className={styles.tab__link}
                onClick={handleOnTabChange}
              >
                Read
              </a>
              <i class="fas fa-journal-whills"></i>
            </li>
            <li className={cx(styles.custom__tab, "tab col s3")}>
              <a
                href="#reading"
                className={styles.tab__link}
                onClick={handleOnTabChange}
              >
                Reading
              </a>
              <i class="fas fa-journal-whills"></i>
            </li>
            <li className={cx(styles.custom__tab, "tab col s3")}>
              <a
                href="#want-to-read"
                className={styles.tab__link}
                onClick={handleOnTabChange}
              >
                Want to read
              </a>
              <i class="fas fa-journal-whills"></i>
            </li>
          </ul>
        </Col>
        <div className="wrap">
          {curTab === "reading" ? (
            <h1>Reading</h1>
          ) : curTab === "want-to-read" ? (
            <h1>Want to read</h1>
          ) : (
            <h1>Read</h1>
          )}
          <div id="read"></div>
          <div id="reading"></div>
          <div id="want-to-read"></div>
        </div>
      </Row>
    </div>
  );
}
