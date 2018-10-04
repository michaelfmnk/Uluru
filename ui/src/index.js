import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import createBrowserHistory from 'history/createBrowserHistory';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import App from 'components/App';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import { extractTokenFromStore } from 'utils/session';
import { restoreAuth } from 'actions/session';
import { detectUserLocale, setLocaleData } from './i18n';

const history = createBrowserHistory();
const store = configureStore(history);
const theme = createMuiTheme();
const target = document.querySelector('#root');

const renderApp = () => render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <App history={history} />
            </MuiPickersUtilsProvider>
        </MuiThemeProvider>
    </Provider>,
    target,
);

const launch = () => {
    const token = extractTokenFromStore();
    console.log(">>>>>>D", token);
    if (token) {
        store.dispatch(restoreAuth(token));
    }
    setLocaleData(detectUserLocale()).then(() => renderApp());
};

launch();
