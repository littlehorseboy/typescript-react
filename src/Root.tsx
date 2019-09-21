import React from 'react';
import Counter from './components/day05/Counter/Counter';
import GetUUID from './components/day05/GetUUID/GetUUID';
import GetUUIDByMultipleOfFive from './components/day05/GetUUIDByMultipleOfFive/GetUUIDByMultipleOfFive';

export default function Root(): JSX.Element {
  return (
    <>
      <Counter />

      <hr />

      <GetUUID />

      <hr />

      <GetUUIDByMultipleOfFive />
    </>
  );
}
