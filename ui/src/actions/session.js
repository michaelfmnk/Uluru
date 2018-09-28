import { CALL_API } from 'middleware/api';

export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const RESTORE_AUTH = 'RESTORE_AUTH';
export const VERIFY_USER = 'VERIFY_USER';
export const SIGN_OUT = 'SIGN_OUT';

export const login = credentials => ({
    [CALL_API]: {
        type: LOGIN,
        endpoint: '/api/auth/login',
        method: 'post',
        body: credentials,
    },
});

export const register = credentials => ({
    [CALL_API]: {
        type: REGISTER,
        endpoint: '/api/auth/sign-up',
        method: 'post',
        body: credentials,
    },
});

export const submitCode = (userId, code) => ({
    [CALL_API]: {
        type: VERIFY_USER,
        endpoint: `/api/users/${userId}/verify`,
        method: 'post',
        body: {
            code,
        },
    },
});

export const signOut = () => ({
    type: SIGN_OUT,
});

export const restoreAuth = token => ({
    type: RESTORE_AUTH,
    token,
});
