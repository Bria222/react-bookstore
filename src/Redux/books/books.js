const BOOK_ADDED = './react-bookstore/bookreducer/BOOK_ADDED';
const BOOK_DELETED = './react-bookstore/bookreducer/BOOK_DELETED';

export const bookAdded = (book) => ({
  type: BOOK_ADDED,
  payload: book,
});

export const deleteBook = (id) => ({
  type: BOOK_DELETED,
  id,
});

const initialState = [];

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case BOOK_ADDED:
      return [...state, { id: state.length + 1, ...action.payload }];
    case BOOK_DELETED:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}
