import React, { useState } from 'react';

export default function Counter(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{`點擊次數為 ${count} 次`}</h1>

      <button type="button" onClick={(): void => setCount(count + 1)}>點我</button>
    </>
  );
}
