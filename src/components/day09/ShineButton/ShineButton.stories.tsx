import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-enable */
import ShineButton from './ShineButton';

storiesOf('ShineButton', module)
  .add('ShineButton', () => (
    <ShineButton />
  ));
