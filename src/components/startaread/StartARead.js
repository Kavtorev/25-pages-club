import React, { useEffect, useState } from "react";
import "./StartARead.css";
import M from "materialize-css";
import reader from "./reading_person.png";
function StartARead() {
  const [imageUrl, setImageUrl] = useState("");

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

  return (
    <div className="startaread__wrapper">
      <div className="row">
        <div className="col s12 m6">
          <div className="row">
            <p className="title">A new beginning...</p>
          </div>
          <div className="row">
            <div className="input-field col s8 offset-s4">
              <input
                id="numOfpages"
                type="number"
                className="validate"
                // placeholder="729"
              />
              <label htmlFor="numOfpages">Number of pages in a book.</label>
              <i class="material-icons prefix">chevron_left</i>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i class="material-icons prefix">person_outline</i>
              <input
                id="author"
                type="text"
                className="validate"
                // placeholder="Jules Verne"
              />
              <label htmlFor="author">Author</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i class="material-icons prefix">local_library</i>
              <input
                id="book"
                type="text"
                className="validate"
                // placeholder="Mysterious Island"
              />
              <label htmlFor="book">Book</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 ">
              <i class="material-icons prefix">date_range</i>
              <input id="date" type="text" className="datepicker" />
              <label htmlFor="date">
                Choose a date when you would like to start a read.
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i class="material-icons prefix">filter</i>
              <input
                id="cover"
                type="text"
                // placeholder="https://image.png"
                className="validate"
                onChange={handleOnChangeImageUrl}
              />
              <label htmlFor="cover">Image of a book's cover Url</label>
            </div>
          </div>
        </div>

        <div className="col s12 m6">
          <div className="row">
            <div className="col s8 offset-s2">
              {!imageUrl.trim() ? (
                <img src={reader} alt="" className="book__cover default" />
              ) : (
                <img src={imageUrl} alt="" className="book__cover" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartARead;
