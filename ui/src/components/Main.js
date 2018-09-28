import MaterialLayoutContainer from 'containers/layout/MaterialLayoutContainer';
import { Route, Switch, Redirect } from 'react-router';
import { MAIN, LOGIN, FEED } from 'data/routes';
import React from 'react';
import LoggedInLayout from 'components/layout/LoggedInLayout';
import { userIsAuthenticatedRedir } from 'auth';
import FeedContainer from 'containers/feed/FeedContainer';

const feedComponent = userIsAuthenticatedRedir(FeedContainer);

const Main = () => (
    <LoggedInLayout>
        <Switch>
            <Redirect exact from={MAIN} to={FEED} />
            <MaterialLayoutContainer>
                <Switch>
                    <Route exact path={FEED} component={feedComponent} />
                </Switch>
            </MaterialLayoutContainer>
            <Redirect to={LOGIN} />
        </Switch>
    </LoggedInLayout>
);

export default Main;
