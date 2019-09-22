import React, { useEffect, useRef } from 'react';

export default function ConsoleRefNumber(): JSX.Element {
  const numberRef = useRef(0);

  useEffect((): () => void => {
    const loop = setInterval((): void => {
      console.log(numberRef.current);
      numberRef.current += 1;
    }, 1000);

    // component unmount
    return (): void => {
      clearInterval(loop);
    };
  }, []);

  return (
    <div>{numberRef.current}</div>
  );
}
