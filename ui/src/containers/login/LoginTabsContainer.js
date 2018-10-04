import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { getPathname } from 'selectors/routing';
import LoginTabs from 'components/login/LoginLayout';

const mapStateToProps = state => ({
    pathname: getPathname(state),
});

export default connect(mapStateToProps, { push })(LoginTabs);
