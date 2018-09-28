import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router';
import Main from 'components/Main';
import LoginLayout from 'containers/login/LoginTabsContainer';
import { LOGIN, MAIN, REGISTER } from 'data/routes';
import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir } from 'auth';


const MainComponent = userIsAuthenticatedRedir(Main);
const AuthComponent = userIsNotAuthenticatedRedir(LoginLayout);

const App = ({ history }) => (
    <ConnectedRouter history={history}>
        <div>
            <Switch>
                <Route exact path={LOGIN} component={AuthComponent} />
                <Route exact path={REGISTER} component={AuthComponent} />
                <Route path={MAIN} component={MainComponent} />
            </Switch>
        </div>
    </ConnectedRouter>
);

App.propTypes = {
    history: PropTypes.object,
};

export default App;
