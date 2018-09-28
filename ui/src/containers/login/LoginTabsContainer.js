import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { getPathname } from 'selectors/routing';
import LoginTabs from 'components/login/LoginLayout';
import { getIsVerifying } from 'selectors/session';

const mapStateToProps = state => ({
    pathname: getPathname(state),
    verifying: getIsVerifying(state),
});

export default connect(mapStateToProps, { push })(LoginTabs);
