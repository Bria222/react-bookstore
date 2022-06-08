const BOOK_ADDED = './react-bookstore/bookreducer/BOOK_ADDED';
const BOOK_DELETED = './react-bookstore/bookreducer/BOOK_DELETED';

export const bookAdded = (book) => ({
  type: BOOK_ADDED,
  payload: book,
});

export const deleteBook = (id) => ({
  type: BOOK_DELETED,
  payload: id,
});

export default function bookReducer(state = [], action) {
  switch (action.type) {
    case BOOK_ADDED:
      return [...state, action.payload];
    case BOOK_DELETED:
      return state.filter((action) => action.id !== action.payload);
    default:
      return state;
  }
}
