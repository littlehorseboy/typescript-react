import { useState, useEffect } from 'react';
import Axios from 'axios';

export default function useGetUUID(): string {
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

  return uuidString;
}
