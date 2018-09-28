import { connect } from 'react-redux';
import CodeVerifier from 'components/login/CodeVerifier';
import { reduxForm } from 'redux-form/immutable';
import { submitCode } from 'actions/session';
import { getRegisteredUserId } from 'selectors/session';

const mapStateToProps = state => ({
    registeredUserId: getRegisteredUserId(state),
});

const merge = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { registeredUserId } = stateProps;

    return {
        ...ownProps,
        onCodeSubmit: values => dispatch(submitCode(registeredUserId, values.get('code'))),
    };
};

const CodeVerifierForm = reduxForm({
    form: 'verification',
    asyncBlurFields: ['code'],
})(CodeVerifier);

export default connect(mapStateToProps, undefined, merge)(CodeVerifierForm);
