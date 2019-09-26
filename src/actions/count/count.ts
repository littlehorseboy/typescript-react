export const SETCOUNT = 'SETCOUNT';

interface SetCountI {
  type: typeof SETCOUNT;
  payload: {
    n: number;
  };
}

export const setCount = (n: number): SetCountI => ({
  type: SETCOUNT,
  payload: {
    n,
  },
});

export type countActionTypes = SetCountI;
