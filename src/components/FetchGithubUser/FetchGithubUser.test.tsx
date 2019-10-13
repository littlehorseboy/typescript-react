import React from 'react';
import { Provider } from 'react-redux';
/* eslint-disable import/no-extraneous-dependencies */
import {
  render, wait, waitForElement, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
/* eslint-enable */
import store from '../../reducers/configureStore';
import FetchGithubUser from './FetchGithubUser';

test('fetchUserTextarea 內容為 "{}"', async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <FetchGithubUser />
    </Provider>,
  );

  const fetchUserTextarea = await waitForElement(() => getByTestId('fetchUserTextarea'));

  expect(fetchUserTextarea).toHaveTextContent('{}');
});

test('fetchUserTextarea ajax 發送回傳內容包含 "login": "littlehorseboy"', async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <FetchGithubUser />
    </Provider>,
  );

  const fetchUserButton = await waitForElement(() => getByTestId('fetchUserButton'));
  const fetchUserTextarea = await waitForElement(() => getByTestId('fetchUserTextarea'));

  fireEvent.click(fetchUserButton);

  await wait(() => {
    expect(fetchUserTextarea).not.toHaveTextContent('{}');
  });

  expect(fetchUserTextarea).toHaveTextContent('{ "login": "littlehorseboy", "id": 16015679, "node_id": "MDQ6VXNlcjE2MDE1Njc5"');
});

test('isFetchingStatus ajax 發送時 state 變化', async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <FetchGithubUser />
    </Provider>,
  );

  const fetchUserButton = await waitForElement(() => getByTestId('fetchUserButton'));
  const isFetchingStatus = await waitForElement(() => getByTestId('isFetchingStatus'));

  fireEvent.click(fetchUserButton);

  expect(isFetchingStatus).toHaveTextContent('loading...');

  await wait(() => {
    expect(isFetchingStatus).toHaveTextContent('');
  });

  expect(isFetchingStatus).toHaveTextContent('');
});

test('isFetchingStatus ajax 發送及取消時 state 變化', async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <FetchGithubUser />
    </Provider>,
  );

  const fetchUserButton = await waitForElement(() => getByTestId('fetchUserButton'));
  const fetchUserCancelButton = await waitForElement(() => getByTestId('fetchUserCancelButton'));
  const isFetchingStatus = await waitForElement(() => getByTestId('isFetchingStatus'));

  fireEvent.click(fetchUserButton);

  expect(isFetchingStatus).toHaveTextContent('loading...');

  fireEvent.click(fetchUserCancelButton);

  expect(isFetchingStatus).toHaveTextContent('');
});
