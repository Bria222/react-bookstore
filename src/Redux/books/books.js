import axios from 'axios';

const BOOK_ADDED = './react-bookstore/bookreducer/BOOK_ADDED';
const BOOK_DELETED = './react-bookstore/bookreducer/BOOK_DELETED';
const BOOK_FAILURE = './react-bookstore/bookreducer/BOOK_FAILURE';

const baseUrl =	'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const apiKey = '2esARPzzJhTQnTpX7VBI';

const initialState = [];
export const bookAdded = (books) => ({
	type: BOOK_ADDED,
	payload: books,
});

export const fetchBooks = () => async (dispatch) => {
	await axios.get(`${baseUrl}/${apiKey}/books`).then(
		(response) => dispatch(bookAdded(response.data)),
		(err) => dispatch({ type: BOOK_FAILURE, err }),
	);
};

export const postBook = (book) => async (dispatch) => {
	await axios
		.post(`${baseUrl}/${apiKey}/books`, book)
		.then(() => dispatch(fetchBooks()));
};

export const BookDeleted = (id) => async (dispatch) => {
	await axios
		.delete(`${baseUrl}/${apiKey}/books/${id}`)
		.then(() => dispatch(fetchBooks()));
};

export default function bookReducer(state = initialState, action) {
	switch (action.type) {
		case BOOK_ADDED: {
			const books = Object.entries(action.payload);
			return books.map((book) => ({
				id: book[0],
				...book[1][0],
			}));
		}
		case BOOK_DELETED:
			return state.filter((book) => book.id !== action.id);
		default:
			return state;
	}
}
