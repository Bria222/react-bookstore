import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../Redux/categories/categories';

function Categories() {
	const statCheck = useSelector((state) => state.categories);
	const dispatch = useDispatch();
	return (
  <div className="category">
    <div>{statCheck}</div>
    <button
      className="status"
      type="submit"
      onClick={() => {
					dispatch(checkStatus());
				}}
    >
      Check Status
    </button>
  </div>
	);
}

export default Categories;
