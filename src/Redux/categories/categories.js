const STATUS_CHECKED = './react-bookstore/bookreducer/STATUS_CHECKED';

export const checkStatus = () => ({
  type: STATUS_CHECKED,
});

const initialState = 'Under Construction Somming Soon....';
export default function statusReducer(state = initialState, action) {
  switch (action.type) {
    case STATUS_CHECKED:
      return state;
    default:
      return state;
  }
}
