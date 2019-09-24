import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default function Blog(props: RouteComponentProps<{ name: string }>): JSX.Element {
  const { match } = props;

  return (
    <>
      <h2>Blog</h2>
      {match.params.name && (
        <h5>{match.params.name}</h5>
      )}
    </>
  );
}
