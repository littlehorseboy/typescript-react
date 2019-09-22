import React, { useState, useMemo } from 'react';

export default function CalculatePlus(): JSX.Element {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  const secondNumberPlusRandom = useMemo(
    (): number => secondNumber + Math.random(),
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
      {secondNumberPlusRandom}
    </>
  );
}
