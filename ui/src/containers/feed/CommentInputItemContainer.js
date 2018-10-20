import { connect } from 'react-redux';
import CommentInputItem from 'components/feed/CommentInputItem';
import { getCurrentUserAvatar } from 'selectors/users';

const mapStateToProps = state => ({
    authorAvatar: getCurrentUserAvatar(state),
});

export default connect(mapStateToProps, {})(CommentInputItem);
