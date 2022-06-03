import React from 'react';

function Addbook() {
  return (
    <div className="formContainer">
      <span className="addBook">ADD NEW BOOK</span>
      <form className="form">
        <input className="formTitle" type="text" placeholder="Book Title" />
        <input className="formAuthor" type="text" placeholder="Author" />
        <button type="button" className="input-submit">
          Add book
        </button>
      </form>
    </div>
  );
}

export default Addbook;
