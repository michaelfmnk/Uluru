import { MAIN, LOGIN } from 'data/routes';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';
import { getIsLoggedIn, getIsLoggingIn } from 'selectors/session';

const locationHelper = locationHelperBuilder({});

const userIsAuthenticatedDefaults = {
    authenticatedSelector: getIsLoggedIn,
    authenticatingSelector: getIsLoggingIn,
    wrapperDisplayName: 'UserIsAuthenticated',
};

export const userIsAuthenticatedRedir = connectedRouterRedirect({
    ...userIsAuthenticatedDefaults,
    redirectPath: LOGIN,
});

export const userIsAuthenticated = connectedAuthWrapper(userIsAuthenticatedDefaults);

const userIsNotAuthenticatedDefaults = {
    authenticatedSelector: state => !getIsLoggedIn(state),
    wrapperDisplayName: 'UserIsNotAuthenticated',
};

export const userIsNotAuthenticated = connectedAuthWrapper(userIsNotAuthenticatedDefaults);

export const userIsNotAuthenticatedRedir = connectedRouterRedirect({
    ...userIsNotAuthenticatedDefaults,
    redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || MAIN,
    allowRedirectBack: false,
});
