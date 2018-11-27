import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Field } from 'redux-form/immutable';
import TextField from 'inputs/forms/TextField';
import { required } from 'validators/validationInputFields';

export default class Post extends React.Component {
    handleClose = () => {
        this.props.handleClose();
    };
    
    onPostSubmit = (action) => {
        this.handleClose();
        return this.props.handleSubmit(this.props.onSubmitPost)(action);
    };
    
    render() {
        const {pristine, submitting } = this.props;
        return (
                <Dialog
                    open
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
            <form onSubmit={this.onPostSubmit}>
                    <DialogTitle id="form-dialog-title">Post it!</DialogTitle>
                    <DialogContent>
                        <Field
                            fullWidth
                            name="content"
                            type="text"
                            margin="dense"
                            id="postContent"
                            component={TextField}
                            validate={[required]}
                            label="What do you think about?"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            type="submit"
                            color="primary"
                            variant="raised"
                            disabled={pristine || submitting}
                        >
                            Post
                        </Button>
                    </DialogActions>
            </form>
                </Dialog>
        );
    }
}
