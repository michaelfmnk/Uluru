import { fromJS } from 'immutable';
import { successAction } from 'actions/actionTypes';
import { GET_CURRENT_USER } from 'actions/users';

const defaultState = fromJS({});

export default function users(state = defaultState, action) {
    switch (action.type) {
        case successAction(GET_CURRENT_USER): {
            return state.set('currentUser', fromJS(action.response.data));
        }
        default: {
            return state;
        }
    }
}
