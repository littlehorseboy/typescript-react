import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storeTypes } from '../../reducers/configureStore';
import { fetchUser } from '../../actions/fetchGithubUser/fetchGithubUser';

export default function FetchGithubUser(): JSX.Element {
  const userInfo = useSelector((state: storeTypes) => state.fetchGithubUserReducer.userInfo);

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
