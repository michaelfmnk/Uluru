import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const Field = ({
    input,
    label,
    meta: { touched, error },
    ...other
}) => (
    <TextField
        label={label}
        error={touched && !!error}
        helperText={touched && error}
        {...input}
        {...other}
    />
);

Field.propTypes = {
    input: PropTypes.object,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    meta: PropTypes.object,
};

export default Field;
