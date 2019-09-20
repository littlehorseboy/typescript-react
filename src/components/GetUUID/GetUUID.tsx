import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function GetUUID(): JSX.Element {
  const [uuidString, setUuidString] = useState('');

  useEffect((): void => {
    Axios({
      method: 'get',
      url: 'http://httpbin.org/uuid',
    })
      .then((response) => {
        setUuidString(response.data.uuid);
      });
  }, []);

  return (
    <>
      <h1>{`UUID: ${uuidString}`}</h1>
    </>
  );
}
