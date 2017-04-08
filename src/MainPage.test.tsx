import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainPage from './MainPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <MuiThemeProvider>
      <MainPage />
    </MuiThemeProvider>
  ), div);
  expect(1).toEqual(1);
});
