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
          <th>Author</th>
          <th>Book</th>
          <th>Date</th>
          <th>Pages</th>
        </tr>
        <tr>
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
                  placeholder="Books"
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
              className="btn waves-effect waves-light "
              onClick={handleOnClick}
            >
              <i class="fas fa-sort-alpha-down"></i>
            </a>
          </th>

          <th>
            <a
              href="#!"
              className="btn waves-effect waves-light "
              onClick={handleOnClick}
            >
              <i class="fas fa-sort-alpha-down"></i>
            </a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="editing__sell">
              <a
                href="#!"
                class="btn-floating btn-small waves-effect waves-light"
              >
                <i class="fas fa-edit"></i>
              </a>
              <p className="date">21 / 07 / 2001</p>
            </div>
          </td>
          <td>Jules Verne</td>
          <td>Mistical Island</td>
          <td>25</td>
        </tr>
        <tr>
          <td>
            <div className="editing__sell">
              <a
                href="#!"
                class="btn-floating btn-small waves-effect waves-light save"
              >
                <i class="fas fa-save"></i>
              </a>
              <a
                href="#!"
                class="btn-floating btn-small waves-effect waves-light"
              >
                <i class="fas fa-undo-alt"></i>
              </a>
              <p className="date">21 / 07 / 2001</p>
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
      </tbody>
    </table>
  );
}

export default RecordTable;
