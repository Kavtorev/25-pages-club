import React from "react";
import "./RecordTable.css";

function RecordTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Author</th>
          <th>Book</th>
          <th>Pages</th>
        </tr>
      </thead>
      <tbody>
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
