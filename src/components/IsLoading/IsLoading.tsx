import React from 'react';
import { useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import CircularProgress from '@material-ui/core/CircularProgress';
import { storeTypes } from '../../reducers/configureStore';

export default function IsLoading(): JSX.Element {
  const isLoading = useSelector((
    state: storeTypes,
  ): boolean => state.isLoadingReducer.isLoading);

  return (
    <Dialog
      open={isLoading}
      PaperComponent={(): JSX.Element => (
        <div><CircularProgress size={60} thickness={7} /></div>
      )}
    >
      <></>
    </Dialog>
  );
}
