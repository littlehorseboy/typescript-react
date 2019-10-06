import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
/* eslint-enable */
import Garbage from './Garbage';

storiesOf('Garbage', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => <DndProvider backend={HTML5Backend}>{story()}</DndProvider>)
  .add('Garbage', withInfo()(() => (
    <Garbage name={text('Name', 'garbage')} />
  )));
