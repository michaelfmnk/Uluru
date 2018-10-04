import { createSelector } from 'reselect';
import { getUserEntities } from 'selectors/users';
import { List } from 'immutable';
import { getCommentEntities } from 'selectors/comments';

export const getPostEntities = state => state.getIn(['entities', 'posts']);


export const getFeedItems = createSelector(
    getPostEntities,
    getUserEntities,
  //  getCommentEntities,
    (posts, users) =>
        posts
            .map(post => post.update('user', val => users.get(val.toString())))
            // .map(post => post.update('comments', ids =>
            //     ids.reduce((res, id) => res.push(comments.get(id.toString())), List())))
            // .map((post) => {
            //     const newComments = post.get('comments')
            //         .map(comment => comment.update('author', val => users.get(val.toString())));
            //     return post.set('comments', newComments);
            // })
    ,
);
