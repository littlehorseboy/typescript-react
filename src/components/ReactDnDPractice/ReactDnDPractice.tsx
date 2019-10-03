import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GarbageCan from './GarbageCan/GarbageCan';
import Garbage from './Garbage/Garbage';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(),
  },
}));

export default function ReactDnDPractice(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GarbageCan />

      <Garbage name="garbage" />
      <Garbage name="paper" />
      <Garbage name="pants" />
    </div>
  );
}
