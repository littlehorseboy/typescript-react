import React from 'react';
import { useDrag } from 'react-dnd';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import ItemTypes from '../ItemTypes';

const useStyles = makeStyles({
  root: {
    margin: '1.5rem',
    padding: '0.5rem 1rem',
    backgroundColor: 'white',
    border: '1px dashed gray',
    cursor: 'move',
    float: 'left',
    opacity: 1,
    '&.isDragging': {
      opacity: 0.4,
    },
  },
});

interface PropsI {
  name: string;
}

export default function Garbage(props: PropsI): JSX.Element {
  const classes = useStyles();

  const { name } = props;

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.GARBAGE, name },
    end: (item: { name: string } | undefined, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className={classNames(classes.root, { opacity: isDragging })}>
      {name}
    </div>
  );
}
