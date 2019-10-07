import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storeTypes } from '../../reducers/configureStore';
import { increment, incrementIfOdd } from '../../actions/counter/counter';

export default function Counter(): JSX.Element {
  const count = useSelector((state: storeTypes) => state.counterReducer.count);

  const dispatch = useDispatch();

  return (
    <>
      Current count:
      <h2>{`${count}`}</h2>

      <button
        type="button"
        onClick={(): void => {
          dispatch(increment());
        }}
      >
        increment
      </button>

      <button
        type="button"
        onClick={(): void => {
          dispatch(incrementIfOdd());
        }}
      >
        incrementIfOdd
      </button>
    </>
  );
}
