import { CALL_API } from 'middleware/api';

export const GET_CURRENT_USER = 'GET_CURRENT_USER';

export const getCurrentUser = () => ({
    [CALL_API]: {
        type: GET_CURRENT_USER,
        endpoint: '/api/user',
        method: 'get',
    },
});
