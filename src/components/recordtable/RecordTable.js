import React, { useState } from "react";
import styles from "./recordTable.module.css";
import cx from "classnames";

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
    <table className={cx("striped", "centered", styles.recordTable)}>
      <thead className={styles.recordTable__head}>
        <tr
          className={cx(
            styles.recordTable__head__colNames,
            styles.recordTable__row
          )}
        >
          <th className={styles.recordTable__header}>Author</th>
          <th>Book</th>
          <th>Date</th>
          <th>Pages</th>
        </tr>
        <tr>
          <th className={styles.recordTable__head__authorFilter}>
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
          <th className={styles.recordTable__head__bookFilter}>
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
      <tbody className={styles.recordTable__body}>
        <tr className={styles.recordTable__row}>
          <td className={styles.recordTable__record}>
            <div className={styles.recordTable__body__editOptions}>
              <a
                href="#!"
                class="btn-floating btn-small waves-effect waves-light"
              >
                <i class="fas fa-edit"></i>
              </a>
              <p className={styles.recordTable__body__dateCol}>
                21 / 07 / 2001
              </p>
            </div>
          </td>
          <td className={styles.recordTable__record}>Jules Verne</td>
          <td className={styles.recordTable__record}>Mistical Island</td>
          <td className={styles.recordTable__record}>25</td>
        </tr>
        <tr className={styles.recordTable__row}>
          <td className={styles.recordTable__record}>
            <div className={styles.recordTable__body__editOptions}>
              <a
                href="#!"
                class={cx(
                  "btn-floating",
                  "btn-small",
                  "waves-effect",
                  "waves-light",
                  styles.save__link
                )}
              >
                <i class="fas fa-save"></i>
              </a>
              <a
                href="#!"
                class="btn-floating btn-small waves-effect waves-light"
              >
                <i class="fas fa-undo-alt"></i>
              </a>
              <p className={styles.recordTable__body__dateCol}>
                21 / 07 / 2001
              </p>
            </div>
          </td>
          <td className={styles.recordTable__record}>Jules Verne</td>
          <td className={styles.recordTable__record}>Mistical Island</td>
          <td className={styles.recordTable__record}>25</td>
        </tr>
        <tr className={styles.recordTable__row}>
          <td className={styles.recordTable__record}>21 / 01 / 2001</td>
          <td className={styles.recordTable__record}>Jules Verne</td>
          <td className={styles.recordTable__record}>Mistical Island</td>
          <td className={styles.recordTable__record}>25</td>
        </tr>
      </tbody>
    </table>
  );
}

export default RecordTable;
