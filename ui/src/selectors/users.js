export const getUserEntities = state => state.getIn(['entities', 'users']);
export const getCurrentUserAvatar = state => state.getIn(['users', 'currentUser', 'avatarId']);
