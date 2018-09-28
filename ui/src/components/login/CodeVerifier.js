import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import TextField from 'inputs/forms/TextField';
import { required } from 'validators/validationInputFields';
import { Button, withStyles } from '@material-ui/core';


const styles = theme => ({
    input: {
        marginBottom: '10px',
    },
    button: {
        marginTop: 2 * theme.spacing.unit,
    },
});

class CodeVerifier extends PureComponent {
    render() {
        const {
            classes,
            pristine,
            submitting,
            handleSubmit,
            onCodeSubmit,
        } = this.props;
        return (
            <form onSubmit={handleSubmit(onCodeSubmit)}>
                <div>
                    <Field
                        fullWidth
                        name="code"
                        type="text"
                        component={TextField}
                        validate={[required]}
                        label="Verification Code"
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
                        Submit
                    </Button>
                </div>
            </form>
        );
    }
}

CodeVerifier.propTypes = {
    classes: PropTypes.object,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    onCodeSubmit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(CodeVerifier);
