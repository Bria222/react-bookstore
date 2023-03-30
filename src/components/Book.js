// eslint-disable jsx-props-no-spreading
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import { checkPropTypes } from 'prop-types';
import { fetchBooks, BookDeleted } from '../Redux/books/books';

const props = {
	id: 0,
	percent: Math.floor(Math.random() * 100 + 1), // is require
	colorSlice: '#00a1ff',
	colorCircle: '#00a1ff',
	fontColor: '#365b74',
	fontSize: '1.6rem',
	fontWeight: 400,
	size: 100,
	stroke: 10,
	strokeBottom: 5,
	speed: 60,
	cut: 0,
	rotation: -90,
	opacity: 10,
	unit: '%',
	textPosition: '0.35em',
	animationOff: false,
	inverse: false,
	round: false,
	number: true,
	linearGradient: ['#ffff00', 'brown'],
};
props.checkPropTypes = {
	percent: checkPropTypes.any,
};

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
      <div>
        {showBook.map((book) => (
          <div key={book.id} className="bookcard">
            <div>
              <h3 className="bookCategory">{book.category}</h3>
              <h1 className="bookTitle">{book.title}</h1>
              <h2 className="bookAuthor">{book.author}</h2>
              <div className="actions">
                <span className="bookActions">Comments</span>
                <span className="rightBorder" />
                <span>
                  <button
                    type="button"
                    className="delete"
                    onClick={() => {
												deleteHandler(book.id);
											}}
                  >
                    Remove
                  </button>
                </span>
                <span className="rightBorder" />
                <span className="bookActions edit">Edit</span>
              </div>
            </div>
            <div>
              <span className="progress">
                {/* eslint-disable-next-line */}
									<CircularProgressBar {...props} />
                <span className="progReport">
                  <p className="propPercent">{`${props.percent}%`}</p>
                  <p className="rate">completed</p>
                </span>
              </span>
            </div>
            <span className="divider" />
            <div className="chapter">
              <h2>CURRENT CHAPTER</h2>
              <h3>CHAPTER 17</h3>
              <button type="button" className="progButton">
                UPDATE PROGRESS
              </button>
            </div>
          </div>
					))}
      </div>
    </div>
  </li>
	);
}

export default Book;
