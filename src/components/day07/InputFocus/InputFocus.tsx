import React, { useRef } from 'react';

export default function InputFocus(): JSX.Element {
  const inputRef = useRef<null | HTMLInputElement>(null);

  const handleClickFocusInput = (): void => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <input ref={inputRef} />
      <button type="button" onClick={handleClickFocusInput}>點我</button>
    </>
  );
}
