import { connect } from 'react-redux';
import Login from 'components/login/Login';
import { reduxForm } from 'redux-form/immutable';
import { login } from 'actions/session';
import { getLoginError } from 'selectors/session';

const handleLogin = values => login({
    email: values.get('login'),
    password: values.get('password'),
});


const mapDispatchToProps = {
    onLogin: handleLogin,
};

const mapStateToProps = state => ({
    errors: getLoginError(state),
});

const LoginForm = reduxForm({
    form: 'login',
    asyncBlurFields: ['email', 'password'],
})(Login);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
