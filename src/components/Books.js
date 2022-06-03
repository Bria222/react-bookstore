import React, { useState } from 'react';
import Book from './Book';
import Addbook from './Addbook';

function Books() {
  const [book, setBook] = useState({
    title: 'Wonders of the Wild',
    author: 'Dodd, Mead & Company',
  });

  const addBooks = (book) => {
    setBook({ ...book, ...book });
  };

  return (
    <div>
      <Book bookProps={book} />
      <Addbook addBookProps={addBooks} />
    </div>
  );
}

export default Books;
