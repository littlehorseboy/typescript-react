import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storeTypes } from '../../../reducers/configureStore';
import { setCount } from '../../../actions/count/count';

export default function Counter(): JSX.Element {
  const count = useSelector((state: storeTypes) => state.countReducer);

  const dispatch = useDispatch();

  const handleClickSetCount = (n: number): void => {
    dispatch(setCount(n));
  };

  return (
    <>
      <h1>{`點擊次數為 ${count} 次`}</h1>

      <button type="button" onClick={(): void => handleClickSetCount(count + 1)}>
        點我
      </button>
    </>
  );
}
