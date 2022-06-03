/* eslint-disable react/prop-types */
import React from 'react';

function Book(props) {
  const { bookProps } = props;
  return (
    <li className="bookList">
      <div className="bookContainer">
        <span>
          {bookProps.title}
          {' '}
          by
          {bookProps.author}
        </span>
        <button type="button" className="delete">
          Delete
        </button>
      </div>
    </li>
  );
}

export default Book;
