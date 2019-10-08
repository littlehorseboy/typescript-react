import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storeTypes } from '../../reducers/configureStore';
import { fetchUser, fetchUserCancelled } from '../../actions/fetchGithubUser/fetchGithubUser';

export default function FetchGithubUser(): JSX.Element {
  const userInfo = useSelector((state: storeTypes) => state.fetchGithubUserReducer.userInfo);

  const isFetching = useSelector((state: storeTypes) => state.isFetchingGithubUserReducer);

  const dispatch = useDispatch();

  return (
    <>
      <button
        type="button"
        onClick={(): void => {
          dispatch(fetchUser('littlehorseboy'));
        }}
      >
        Fetch User Info
      </button>

      <button
        type="button"
        onClick={(): void => {
          dispatch(fetchUserCancelled());
        }}
      >
        Fetch User Cancelled
      </button>

      <span>{isFetching ? 'loading...' : ''}</span>

      <br />

      <textarea
        cols={100}
        rows={30}
        value={JSON.stringify(userInfo, null, 2)}
        onChange={(): void => {}}
      />
    </>
  );
}
