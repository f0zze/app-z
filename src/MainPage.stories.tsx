import * as React from 'react';
import {storiesOf} from '@kadira/storybook';
import MainPage from './MainPage';

storiesOf('MainPage', module)
  .add('basic', () => (
    <MainPage />
  ));
