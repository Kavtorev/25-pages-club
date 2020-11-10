import React, { useEffect, useState } from "react";
import M from "materialize-css";
// import Carousel from "../carousel/Carousel";
import "./Shelf.css";

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
    <div className="container padding__top">
      <div className="row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s3">
              <a href="#read" onClick={handleOnTabChange}>
                Read
              </a>
              <i class="fas fa-journal-whills"></i>
            </li>
            <li className="tab col s3">
              <a href="#reading" onClick={handleOnTabChange}>
                Reading
              </a>
              <i class="fas fa-journal-whills"></i>
            </li>
            <li className="tab col s3">
              <a href="#want-to-read" onClick={handleOnTabChange}>
                Want to read
              </a>
              <i class="fas fa-journal-whills"></i>
            </li>
          </ul>
        </div>
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
      </div>
    </div>
  );
}
