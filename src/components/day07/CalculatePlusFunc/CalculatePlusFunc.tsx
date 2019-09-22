import React, { useState, useCallback } from 'react';

export default function CalculatePlusFunc(): JSX.Element {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  const handleClickSecondNumberPlusRandom = useCallback(
    (): void => console.log(firstNumber + secondNumber),
    [secondNumber],
  );

  return (
    <>
      {firstNumber}
      <button type="button" onClick={(): void => setFirstNumber(firstNumber + 1)}>點我</button>
      <hr />
      {secondNumber}
      <button type="button" onClick={(): void => setSecondNumber(secondNumber + 1)}>點我</button>
      <hr />
      <button type="button" onClick={handleClickSecondNumberPlusRandom}>點我</button>
    </>
  );
}
