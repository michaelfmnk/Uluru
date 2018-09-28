import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';
import { fromJS } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import api from 'middleware/api';
import rootSaga from 'sagas';

export default function configureStore(history) {
    const sagaMiddleware = createSagaMiddleware();

    const enhancers = [

    ];

    const middleware = [
        api,
        thunk,
        sagaMiddleware,
        routerMiddleware(history),
    ];

    const composedEnhancers = compose(
        composeWithDevTools(applyMiddleware(...middleware)),
        ...enhancers,
    );

    const store = createStore(
        rootReducer,
        fromJS({}),
        composedEnhancers,
    );

    sagaMiddleware.run(rootSaga);
    return store;
}
