import { fromJS } from 'immutable';
import { LIKE_FEED_ITEM } from 'actions/feed';
import { feed } from 'data/fakedata';

const defaultState = fromJS({
    users: {},
    comments: {},
    posts: {},    
});

export default function entitiesReducer(state = defaultState, action) {
    if (action.response && action.response.normalizedData && action.response.normalizedData.entities) {
        let newState = state;
        
        Object.keys(action.response.normalizedData.entities).forEach(entityName => {
            if (!entityName) {
                return state;
            }
            const entities = newState.get(entityName)
                .merge(action.response.normalizedData.entities[entityName]);
            return newState = newState.set(entityName, entities);
        });
        return newState;
    }    
    switch (action.type) {
        case LIKE_FEED_ITEM: {
            return state.updateIn(['posts', action.postId.toString(), 'liked'], val => !val);
        }
        default: {
            return state;
        }
    }
}
