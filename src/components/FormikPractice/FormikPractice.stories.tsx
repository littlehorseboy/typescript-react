import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-enable */
import FormikPractice from './FormikPractice';

storiesOf('FormikPractice', module)
  .add('FormikPractice', () => (
    <FormikPractice />
  ));
