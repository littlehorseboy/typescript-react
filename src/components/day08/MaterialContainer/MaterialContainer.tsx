import React from 'react';
import Button from '@material-ui/core/Button';

export default function MaterialContainer(): JSX.Element {
  return (
    <>
      <Button variant="contained">點我</Button>
      <hr />
      <Button variant="contained" color="primary">點我</Button>
      <hr />
      <Button variant="contained" color="secondary">點我</Button>
    </>
  );
}
