import { CALL_API } from 'middleware/api';
import schemas from 'data/schemas';
import { normalizeEntityResponse } from '../utils/converters';
export const LIKE_FEED_ITEM = 'LIKE_FEED_ITEM';
export const GET_FEED = 'GET_FEED';
export const SEND_COMMENT = 'SEND_COMMENT';


export const likePostItem = (postId, liked) => {
    console.log('LIKED',liked);
    return ({
        [CALL_API]: {
            type: LIKE_FEED_ITEM,
            method: liked ? 'delete' : 'post',
            endpoint: `/api/posts/${postId}/likes`,
            postId,
        },
    });
};

export const loadFeed = () => ({
    [CALL_API]: {
        type: GET_FEED,
        method: 'get',
        endpoint: '/api/feed',
        converter: normalizeEntityResponse(schemas.POST_ARRAY),
    },
});

export const sendComment = (postId, content) => ({
    [CALL_API]: {
        type: SEND_COMMENT,
        method: 'post',
        endpoint: `/api/posts/${postId}/comments`,
        body: {
            content,
        }
    },
});
