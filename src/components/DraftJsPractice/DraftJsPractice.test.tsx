import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { render, waitForElement, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
/* eslint-enable */
import DraftJsPractice from './DraftJsPractice';

test('測試 component 是否正常 render，Editor 內容為 "Hello"', async () => {
  const { getByTestId } = render(<DraftJsPractice />);

  const node = await waitForElement(() => getByTestId('draftjs-editor'));

  expect(node).toHaveTextContent('Hello');
});

test('contenteditable="true" 元素的內容更改為 "123"', async () => {
  const { getByTestId } = render(<DraftJsPractice />);

  const node = await waitForElement(() => getByTestId('draftjs-editor'));

  const editor = node.querySelector('div[contenteditable="true"]');

  if (editor) {
    fireEvent.change(editor, { target: { textContent: '123' } });
    expect(editor).toHaveTextContent('123');
  }
});
