import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';

const styles = {
    error: {
        width: '100%',
        backgroundColor: 'rgba(244, 67, 54, 0.5)',
        borderRadius: '3px',
    },
    errorText: {
        padding: '6px 4px',
        textAlign: 'center',
    },
};


const ErrorMessage = (props) => {
    const {
        message,
        classes,
    } = props;

    return (
        <div className={classes.error}>
            <Typography className={classes.errorText}>
                {
                    message
                }
            </Typography>
        </div>
    );
};

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
    classes: PropTypes.object,
};

export default withStyles(styles)(ErrorMessage);
