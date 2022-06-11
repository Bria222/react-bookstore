import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, BookDeleted } from '../Redux/books/books';

function Book() {
  const showBook = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const deleteHandler = (id) => {
    dispatch(BookDeleted(id));
  };

  return (
    <li className="bookList">
      <div className="bookContainer">
        <span>
          {showBook.map((book) => (
            <div key={book.id} className="eachbook">
              {book.title}
              {' '}
              :
              {book.author}
              <button
                type="button"
                className="delete"
                onClick={() => {
                  deleteHandler(book.id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </span>
      </div>
    </li>
  );
}

export default Book;
