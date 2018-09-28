import React, { PureComponent } from 'react';
import { Button, withStyles } from '@material-ui/core';
import { Field } from 'redux-form/immutable';
import TextField from 'inputs/forms/TextField';
import { email, required, match } from 'validators/validationInputFields';
import PropTypes from 'prop-types';
import ErrorMessage from 'components/login/ErrorMessage';

const styles = theme => ({
    input: {
        marginBottom: '10px',
    },
    button: {
        marginTop: 2 * theme.spacing.unit,
    },
});


class Register extends PureComponent {
    render() {
        const {
            errors,
            classes,
            pristine,
            submitting,
            onRegister,
            handleSubmit,
        } = this.props;

        return (
            <form onSubmit={handleSubmit(onRegister)}>
                {
                    errors &&
                    (
                        <ErrorMessage
                            message={errors}
                        />
                    )
                }
                <div>
                    <Field
                        fullWidth
                        name="login"
                        type="text"
                        component={TextField}
                        validate={[required, email]}
                        label="Email"
                        className={classes.input}
                    />
                </div>
                <div>
                    <Field
                        fullWidth
                        name="password"
                        type="password"
                        component={TextField}
                        label="Password"
                        validate={[required, match]}
                        className={classes.input}
                    />
                </div>
                <div>
                    <Field
                        fullWidth
                        name="confirmPassword"
                        type="password"
                        component={TextField}
                        label="confirm password"
                        validate={[required, match]}
                        className={classes.input}
                    />
                </div>
                <div>
                    <Button
                        fullWidth
                        variant="raised"
                        color="primary"
                        type="submit"
                        disabled={pristine || submitting}
                        className={classes.button}
                    >
                        Register
                    </Button>
                </div>
            </form>
        );
    }
}

Register.propTypes = {
    errors: PropTypes.string,
    classes: PropTypes.object,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    onRegister: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(Register);
