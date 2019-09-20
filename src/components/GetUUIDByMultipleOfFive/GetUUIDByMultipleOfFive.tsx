import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';

export default function GetUUIDByMultipleOfFive(): JSX.Element {
  const [uuidString, setUuidString] = useState('');
  const [count, setCount] = useState(0);

  const countRef = useRef(0);

  useEffect((): void => {
    Axios({
      method: 'get',
      url: 'http://httpbin.org/uuid',
    })
      .then((response) => {
        setUuidString(response.data.uuid);
      });
  }, [count]);

  const handleIncreaseCountRef = (): void => {
    countRef.current += 1;
    if (countRef.current % 5 === 0) {
      setCount(countRef.current);
    }
  };

  return (
    <>
      <h1>{`UUID: ${uuidString}`}</h1>

      <button type="button" onClick={handleIncreaseCountRef}>點我</button>
    </>
  );
}
