import React from 'react';
import UUIDStatus from './components/day06/UUIDStatus/UUIDStatus';
import UUIDList from './components/day06/UUIDList/UUIDList';

export default function Root(): JSX.Element {
  return (
    <>
      <UUIDStatus />

      <hr />

      <UUIDList />
    </>
  );
}
