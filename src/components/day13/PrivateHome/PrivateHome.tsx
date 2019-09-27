import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loading, loaded } from '../../../actions/isLoading/isLoading';

export default function PrivateHome(): JSX.Element {
  const dispatch = useDispatch();

  useEffect((): void => {
    dispatch(loading());

    setTimeout((): void => {
      dispatch(loaded());
    }, 1000);
  }, []);

  return (
    <h2>PrivateHome</h2>
  );
}
