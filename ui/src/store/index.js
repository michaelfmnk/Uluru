import { createStore, compose, applyMiddleware } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import rootReducer from '../store';
import thunk from 'redux-thunk';
import api from '../middleware/api';

export default function configureStore(history) {
    
    const enhancers = [

    ];

    const middlewares = [
        api,
        thunk,
        routerMiddleware(history),
    ];

    const composedEnhancers = compose(
        composeWithDevTools(applyMiddleware(...middlewares)),
        ...enhancers,
    );

    const store = createStore(
        rootReducer,
        fromJS({}),
        composedEnhancers,
    );
    
    return store;
}
