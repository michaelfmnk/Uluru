import { schema } from 'normalizr';

const user = new schema.Entity('users');

const comment = new schema.Entity('comments', {
    user: user,
});

const postArray = new schema.Array(new schema.Entity('posts', {
    user: user,
    comments: [comment] 
}));

export default {
    POST_ARRAY: postArray,
};
