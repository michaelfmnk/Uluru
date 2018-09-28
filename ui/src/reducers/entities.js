import { fromJS } from 'immutable';
import { LIKE_FEED_ITEM } from 'actions/feed';
import { normalize, schema } from 'normalizr';
import { feed } from 'data/fakedata';

const getDefaultState = () => {
    const user = new schema.Entity('users');
    const comment = new schema.Entity('comments', {
        author: user,
    });
    const postArray = new schema.Array(new schema.Entity('posts', {
        author: user,
        comments: [comment],
    }));
    return fromJS(normalize(feed, postArray).entities);
};


export default function entitiesReducer(state = getDefaultState(), action) {
    switch (action.type) {
        case LIKE_FEED_ITEM: {
            return state.updateIn(['posts', action.postId.toString(), 'liked'], val => !val);
        }
        default: {
            return state;
        }
    }
}
