import React from 'react';
import { Provider } from 'react-redux';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-enable */
import store from '../../reducers/configureStore';
import Pinging from './Pinging';

storiesOf('Pinging', module)
  .addDecorator((story) => <Provider store={store}>{story()}</Provider>)
  .add('Pinging', () => (
    <Pinging />
  ));
