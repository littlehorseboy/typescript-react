import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(10), // 8px * 10
  },
  button: {
    zIndex: 1,
    position: 'relative',
    color: theme.palette.common.white,
    padding: theme.spacing(1, 2), // 8px, 8px * 2
    [theme.breakpoints.down('sm')]: { // @media (max-width: 959.95px)
      padding: theme.spacing(0.5, 1), // 8px * 0.5, 8px
    },
    outline: 'none',
    border: 'none',
    backgroundColor: 'hsl(236, 32%, 26%)',
    overflow: 'hidden',
    cursor: 'pointer',
    boxShadow: theme.shadows[3],
    borderRadius: theme.shape.borderRadius, // 4
    '&::after': {
      content: '""',
      zIndex: -1,
      backgroundColor: 'hsla(0, 0%, 100%, 0.2)',
      position: 'absolute',
      top: '-50%',
      bottom: '-50%',
      width: '1.25em',
      transform: 'translate3d(-525%, 0, 0) rotate(35deg)',
    },
    '&:hover::after': {
      transition: 'transform 0.45s ease-in-out',
      transform: 'translate3d(200%, 0, 0) rotate(35deg)',
    },
  },
}));

export default function ShineButton(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <button type="button" className={classes.button}>點我</button>
    </div>
  );
}
