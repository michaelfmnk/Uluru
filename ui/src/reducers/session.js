import { fromJS } from 'immutable';
import { failAction, startAction, successAction, UNAUTHORIZED } from 'actions/actionTypes';
import { LOGIN, REGISTER, RESTORE_AUTH, SIGN_OUT, VERIFY_USER } from 'actions/session';

const defaultState = fromJS({ logginIn: false, loggedIn: false });

export default function session(state = defaultState, action) {
    switch (action.type) {
        case startAction(LOGIN): {
            return fromJS({ logginIn: true, loggedIn: false });
        }
        case successAction(VERIFY_USER):
        case successAction(LOGIN): {
            return fromJS({
                logginIn: false,
                loggedIn: true,
                token: action.response.data.token,
            });
        }
        case successAction(REGISTER): {
            return state.merge({
                registerError: null,
                registeredUserId: action.response.data.id,
            });
        }
        case failAction(LOGIN): {
            return defaultState.merge({
                loginError: action.response.data.detail,
            });
        }
        case failAction(REGISTER): {
            return state.merge({ registerError: action.response.data.detail });
        }
        case RESTORE_AUTH: {
            console.log('reducer', action.token);
            return fromJS({
                logginIn: false,
                loggedIn: true,
                token: action.token,
            });
        }
        case UNAUTHORIZED:
        case SIGN_OUT: {
            return defaultState;
        }
        default: {
            return state;
        }
    }
}
