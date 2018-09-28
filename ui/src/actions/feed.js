import { CALL_API } from 'middleware/api';

export const LIKE_FEED_ITEM = 'LIKE_FEED_ITEM';
export const GET_FEED = 'GET_FEED';


export const likePostItem = postId => ({
    type: LIKE_FEED_ITEM,
    postId,
});

export const loadFeed = () => ({
    [CALL_API]: {
        type: GET_FEED,
        method: 'get',
        endpoint: '/api/feed',
    },
});
