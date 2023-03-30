import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { postBook } from '../Redux/books/books';

const Addbook = () => {
	const initialBookState = {
		item_id: '',
		title: '',
		author: '',
		category: '',
	};
	const [bookState, setBookState] = useState(initialBookState);

	const dispatch = useDispatch();

	const handleOnChange = (event) => {
		const { name, value } = event.target;
		setBookState({ ...bookState, [name]: value });
	};

	const handleSubmit = () => {
		const book = { ...bookState, item_id: uuid() };
		dispatch(postBook(book));
		setBookState(initialBookState);
	};
	return (
  <div className="formContainer">
    <span className="addBook">ADD NEW BOOK</span>
    <form className="form">
      <input
        className="formTitle"
        type="text"
        name="title"
        value={bookState.title}
        placeholder="Book Title"
        onChange={handleOnChange}
      />
      <input
        className="formAuthor"
        type="text"
        name="author"
        value={bookState.author}
        placeholder="Author"
        onChange={handleOnChange}
      />
      <select
        name="category"
        className="formAuthor"
        onChange={handleOnChange}
      >
        <option value="">Category</option>
        <option value="Fiction">Fiction</option>
        <option value="Horror">Suspense</option>
        <option value="Religious">Religious</option>
        <option value="Romance">Romance</option>
      </select>
      <button type="button" className="input-submit" onClick={handleSubmit}>
        Add book
      </button>
    </form>
  </div>
	);
};

export default Addbook;
