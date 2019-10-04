import React from 'react';
import { Provider } from 'react-redux';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-enable */
import store from '../../reducers/configureStore';
import Login from './Login';

storiesOf('Login', module)
  .addDecorator((story) => <Provider store={store}>{story()}</Provider>)
  .add('Login', () => (
    <Login />
  ));
