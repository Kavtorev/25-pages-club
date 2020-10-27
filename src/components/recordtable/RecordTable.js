import React, { useState } from "react";
import "./RecordTable.css";

function RecordTable() {
  // const [dateSort, setDateSort] = useState("");
  // const [pagesSort, setPagesSort] = useState("");

  const handleOnClick = (event) => {
    console.log(event.target);
  };

  const handleOnChange = (event) => {
    console.log(event.target.id);
  };

  return (
    <table className="striped centered record__table">
      <thead>
        <tr className="field__names">
          <th>Date</th>
          <th>Author</th>
          <th>Book</th>
          <th>Pages</th>
        </tr>
        <tr>
          <th>
            <a
              href="#!"
              className="btn-floating btn waves-effect waves-light "
              onClick={handleOnClick}
            >
              <i className="material-icons">sort_by_alpha</i>
            </a>
          </th>
          <th className="author__filtering">
            <div className="row">
              <div className="input-field col s8 offset-s2">
                <input
                  placeholder="Authors"
                  id="author_filter"
                  type="text"
                  className="validate"
                  onChange={handleOnChange}
                />
              </div>
            </div>
          </th>
          <th className="book__filtering">
            <div className="row">
              <div className="input-field col s8 offset-s2">
                <input
                  placeholder="Filter"
                  id="book_filter"
                  type="text"
                  className="validate"
                  onChange={handleOnChange}
                />
              </div>
            </div>
          </th>
          <th>
            <a
              href="#!"
              className="btn-floating btn waves-effect waves-light "
              onClick={handleOnClick}
            >
              <i className="material-icons">sort_by_alpha</i>
            </a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="editing__cell">
              <div className="editing__buttons">
                <a
                  href="#!"
                  className="btn-floating btn-small waves-effect waves-light "
                  onClick={handleOnClick}
                >
                  <i className="material-icons">edit</i>
                </a>
              </div>
              <span className="date">21 / 01 / 2001</span>
            </div>
          </td>
          <td>Jules Verne</td>
          <td>Mistical Island</td>
          <td>25</td>
        </tr>

        <tr>
          <td>21 / 01 / 2001</td>
          <td>Jules Verne</td>
          <td>Mistical Island</td>
          <td>25</td>
        </tr>
        <tr>
          <td>21 / 01 / 2001</td>
          <td>Jules Verne</td>
          <td>Mistical Island</td>
          <td>25</td>
        </tr>
        <tr>
          <td>21 / 01 / 2001</td>
          <td>Jules Verne</td>
          <td>Mistical Island</td>
          <td>25</td>
        </tr>
        <tr>
          <td>21 / 01 / 2001</td>
          <td>Jules Verne</td>
          <td>Mistical Island</td>
          <td>25</td>
        </tr>
        <tr>
          <td>21 / 01 / 2001</td>
          <td>Jules Verne</td>
          <td>Mistical Island</td>
          <td>25</td>
        </tr>
        <tr>
          <td>21 / 01 / 2001</td>
          <td>Jules Verne</td>
          <td>Mistical Island</td>
          <td>25</td>
        </tr>
        <tr>
          <td>21 / 01 / 2001</td>
          <td>Jules Verne</td>
          <td>Mistical Island</td>
          <td>25</td>
        </tr>
        <tr>
          <td>21 / 01 / 2001</td>
          <td>Jules Verne</td>
          <td>Mistical Island</td>
          <td>25</td>
        </tr>
        <tr>
          <td>21 / 01 / 2001</td>
          <td>Jules Verne</td>
          <td>Mistical Island</td>
          <td>25</td>
        </tr>
        <tr>
          <td>21 / 01 / 2001</td>
          <td>Jules Verne</td>
          <td>Mistical Island</td>
          <td>25</td>
        </tr>
        <tr>
          <td>21 / 01 / 2001</td>
          <td>Jules Verne</td>
          <td>Mistical Island</td>
          <td>25</td>
        </tr>
        <tr>
          <td>21 / 01 / 2001</td>
          <td>Jules Verne</td>
          <td>Mistical Island</td>
          <td>25</td>
        </tr>
        <tr>
          <td>21 / 01 / 2001</td>
          <td>Jules Verne</td>
          <td>Mistical Island</td>
          <td>25</td>
        </tr>
      </tbody>
    </table>
  );
}

export default RecordTable;
