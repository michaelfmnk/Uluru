import React, { PureComponent } from 'react';
import { Paper, TextField, Avatar, Grid, withStyles, IconButton } from '@material-ui/core';
import { Send } from '@material-ui/icons';

const styles = () => ({
    container: {
        margin: '300px',        
    },
});


class CommentInputItem extends PureComponent {
    static PropTypes = {
            
    };
    
    constructor(props) {
        super(props);
    }

    render() {
        const {
            classes
        } = this.props;
        return (
            <div style={{ padding: 10 }}>
                <Grid 
                    container 
                    spacing={20}
                    
                >
                    <Grid item xs={1}>
                        <Avatar 
                            src={"https://i.imgur.com/GuAB8OE.jpg"}
                        />
                    </Grid> 
                    
                    <Grid item xs={10}>
                        <TextField
                            placeholder={"Write your comment..."}
                            multiline={true}
                            fullWidth={true}    
                            labelWidth={"Comment"} 
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton>
                            <Send />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(CommentInputItem);
