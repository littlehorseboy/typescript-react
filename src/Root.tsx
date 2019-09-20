import React from 'react';
import Counter from './components/Counter/Counter';
import GetUUID from './components/GetUUID/GetUUID';
import GetUUIDByMultipleOfFive from './components/GetUUIDByMultipleOfFive/GetUUIDByMultipleOfFive';

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
