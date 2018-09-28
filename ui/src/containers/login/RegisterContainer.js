import { connect } from 'react-redux';
import Register from 'components/login/Register';
import { reduxForm } from 'redux-form/immutable';
import { register } from 'actions/session';
import { getRegisterError } from 'selectors/session';

const handleRegister = values => register({
    login: values.get('login'),
    password: values.get('password'),
});

const mapDispatchToProps = {
    onRegister: handleRegister,
};

const mapStateToProps = state => ({
    errors: getRegisterError(state),
});

const RegisterForm = reduxForm({
    form: 'register',
    asyncBlurFields: ['email', 'password'],
})(Register);

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
