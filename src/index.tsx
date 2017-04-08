import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route} from 'react-router';
import './index.scss';
import theme from './Theme';
import history from './History';
import MainPage from './MainPage';

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider muiTheme={theme}>
        <Router history={history}>
            <Route path="/" component={MainPage}/>
        </Router>
    </MuiThemeProvider>,
    document.getElementById('root')
);
