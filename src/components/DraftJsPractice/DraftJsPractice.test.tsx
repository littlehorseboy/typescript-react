import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
/* eslint-enable */
import DraftJsPractice from './DraftJsPractice';

test('測試 component 是否正常 render，Editor 內容為 "Hello"', async () => {
  const { getByTestId } = render(<DraftJsPractice />);

  const node = await waitForElement(() => getByTestId('draftjs-editor'));

  expect(node).toHaveTextContent('Hello');
});

test('測試 component 是否正常 render，Editor 內容為 "Hello"', async () => {
  const { getByTestId } = render(<DraftJsPractice />);

  const node = await waitForElement(() => getByTestId('draftjs-editor'));

  const editor = node.querySelector('div[contenteditable="true"]');

  if (editor) {
    editor.textContent = '123';
    expect(node).toHaveTextContent('123');
  }
});
