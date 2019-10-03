import React from 'react';
import { useDrop } from 'react-dnd';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import ItemTypes from '../ItemTypes';

const useStyles = makeStyles({
  root: {
    height: '12rem',
    width: '12rem',
    margin: '1.5rem',
    padding: '1rem',
    color: 'white',
    textAlign: 'center',
    fontSize: '1rem',
    backgroundColor: '#222',
    '&.canDrop': {
      backgroundColor: 'darkkhaki',
    },
    '&.isActive': {
      backgroundColor: 'darkgreen',
    },
  },
});

export default function GarbageCan(): JSX.Element {
  const classes = useStyles();

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.GARBAGE,
    drop: () => ({ name: 'GarbageCan' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={drop}
      className={classNames(
        classes.root,
        { canDrop },
        { isActive: canDrop && isOver },
      )}
    >
      {canDrop && isOver ? 'Release to drop' : 'Drag a garbage here'}
    </div>
  );
}
