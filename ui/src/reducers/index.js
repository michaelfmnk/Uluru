import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form/immutable';
import session from 'reducers/session';
import entities from 'reducers/entities';
import users from 'reducers/users';

export default combineReducers({
    rooting: routerReducer,
    entities,
    form,
    session,
    users,
});
