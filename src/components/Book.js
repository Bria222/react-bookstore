/* eslint-disable react/prop-types */
import React from 'react';

function Book() {
  return (
    <li className="bookList">
      <div className="bookContainer">
        <span />
        <button type="button" className="delete">
          Delete
        </button>
      </div>
    </li>
  );
}

export default Book;
