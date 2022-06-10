import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookAdded } from '../Redux/books/books';

const Addbook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(bookAdded({ title, author }));
    setTitle('');
    setAuthor('');
  };
  return (
    <div className="formContainer">
      <span className="addBook">ADD NEW BOOK</span>
      <form className="form">
        <input
          className="formTitle"
          type="text"
          name="title"
          placeholder="Book Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="formAuthor"
          type="text"
          name="author"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="button" className="input-submit" onClick={handleSubmit}>
          Add book
        </button>
      </form>
    </div>
  );
};

export default Addbook;
