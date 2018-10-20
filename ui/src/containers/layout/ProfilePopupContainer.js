import { connect } from 'react-redux';
import ProfilePopup from 'components/layout/ProfilePopup';
import { getCurrentUser } from 'selectors/users';

const mapStateToProps = state => ({
    user: getCurrentUser(state),
});

export default connect(mapStateToProps, {})(ProfilePopup);
