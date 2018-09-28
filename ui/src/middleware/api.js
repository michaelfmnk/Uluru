import axios from 'axios';
// import { getAuthHeaders } from 'selectors/session';

import { SubmissionError } from 'redux-form/immutable';
import { getLocale } from 'i18n';

import {
    startAction,
    successAction,
    failAction,
    UNAUTHORIZED,
    RESPONSE_ERROR,
    SEND_REQUEST,
} from 'actions/actionTypes';

const instance = axios.create({
    timeout: 30000,
    withCredentials: true,
});

const errorAccumulator = (res, er) => {
    res[er.field] = er.message;
    return res;
};

export const callApi = (headers, method = 'get', endpoint, body, params, responseType = 'json') =>
    instance({
        headers, url: endpoint, method, data: body, params, responseType,
    });

export const CALL_API = Symbol('CALL_API');

export default store => next => (action) => {
    const callAPI = action[CALL_API];

    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    let { endpoint } = callAPI;
    const {
        type, method = 'get', body = {}, params, converter = response => response,
        responseType, submitFormRequest,
    } = callAPI;

    if (typeof endpoint === 'function') {
        endpoint = endpoint(store.getState());
    }

    if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.');
    }

    if (typeof type !== 'string') {
        throw new Error('Expected action type to be string.');
    }

    const actionWith = (data) => {
        const finalAction = {
            ...action,
            ...data,
        };

        delete finalAction[CALL_API];

        return finalAction;
    };

    store.dispatch(actionWith({
        type: startAction(type),
    }));
    store.dispatch({ type: SEND_REQUEST, requestType: type });
    const headers = {};
    headers.locale = getLocale();

    return callApi(headers, method, endpoint, body, params, responseType).then(
        response => store.dispatch(actionWith({
            response: converter(response),
            type: successAction(type),
        })),
        (error) => {
            if (!error.response) {
                const d = store.dispatch(actionWith({
                    type: failAction(type),
                    error: error.message || 'Error happened during API call',
                }));
                if (submitFormRequest) {
                    throw new SubmissionError(error.response.data.errors || error.response.data.message);
                } else {
                    return d;
                }
            }
            if (error.response.status) {
                store.dispatch(actionWith({
                    type: RESPONSE_ERROR,
                    response: error.response,
                }));
            }
            if (error.response.status === 401) {
                return store.dispatch(actionWith({
                    type: UNAUTHORIZED,
                    response: error.response,
                    error: error.response.data,
                }));
            }
            const dispatchPromise = store.dispatch(actionWith({
                type: failAction(type),
                response: error.response,
                error: (error.response && error.response.data) || 'Error happened during API call',
            }));
            if (submitFormRequest) {
                const errors = error.response.data.errors && error.response.data.errors.reduce(errorAccumulator, {});
                throw new SubmissionError({
                    ...errors,
                    _error: (error.response.data && error.response.data.errors && error.response.data.errors[0].message)
                    || error.response.data.message,
                });
            } else {
                return dispatchPromise;
            }
        },
    );
};
