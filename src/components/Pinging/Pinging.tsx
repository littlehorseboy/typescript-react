import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storeTypes } from '../../reducers/configureStore';
import { ping } from '../../actions/pinging/pinging';

export default function Pinging(): JSX.Element {
  const isPinging = useSelector((state: storeTypes) => state.pingingReducer.isPinging);

  const dispatch = useDispatch();

  return (
    <>
      <div>{`${isPinging}`}</div>

      <button type="button" onClick={(): void => { dispatch(ping()); }}>
        Start PING
      </button>
    </>
  );
}
