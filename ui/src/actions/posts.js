import { CALL_API } from 'middleware/api';
import { normalizeEntityResponse } from 'utils/converters';
import schemas from 'data/schemas';

export const CREATE_POST = 'CREATE_POST';
export const createPost = body => ({
    [CALL_API]: {
        type: CREATE_POST,
        endpoint: '/api/posts',
        method: 'post',
        body,
    },
}); 
