import React from 'react';
import useGetUUID from '../useGetUUID';

export default function UUIDList(): JSX.Element {
  const uuidString = useGetUUID();

  return (
    <>
      <em>component: UUIDList</em>
      <ul>
        <li>{`UUID: ${uuidString}`}</li>
      </ul>
    </>
  );
}
