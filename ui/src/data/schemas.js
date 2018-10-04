import { schema } from 'normalizr';

const user = new schema.Entity('users');

const comment = new schema.Entity('comments', {
    author: user,
});

// const postArray = new schema.Array(new schema.Entity('posts', {
//     author: user,
//     comments: [comment],
// }));
const postArray = new schema.Array(new schema.Entity('posts', {
    user: user,
}));

export default {
    POST_ARRAY: postArray,
};
