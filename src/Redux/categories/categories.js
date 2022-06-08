const STATUS_CHECKED = './react-bookstore/bookreducer/STATUS_CHECKED';

export const checkStatus = () => ({
  type: STATUS_CHECKED,
});

export default function statusReducer(state = [], action) {
  switch (action.type) {
    case STATUS_CHECKED:
      return 'Under Construction';
    default:
      return state;
  }
}
