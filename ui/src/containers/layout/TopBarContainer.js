import { connect } from 'react-redux';
import TopBar from 'components/layout/TopBar';
import { signOut } from 'actions/session';

const mapDispatchToProps = {
    handleSignOut: signOut,
};

export default connect(undefined, mapDispatchToProps)(TopBar);
