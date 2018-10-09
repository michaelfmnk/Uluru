import React, { Component } from 'react';
import { Paper, TextField, Avatar, Grid, withStyles, IconButton } from '@material-ui/core';
import { Send } from '@material-ui/icons';

const styles = () => ({

});


class CommentInputItem extends Component {
    static PropTypes = {
            
    };
    
    constructor(props) {
        super(props);
        this.state = {
            content: '',
        }
    }
    
    handleContentChange = (val) => {
        console.log(val.target.value);
        this.setState({
            content: val.target.value,
        })           
    };
    
    handleSubmit = () => {
        this.props.onSubmit(this.state.content);
        this.setState({
           content: '', 
        });
    };

    render() {
        const {
            classes
        } = this.props;
        return (
            <div style={{ padding: 20 }}>
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
                            value={this.state.content}
                            onChange={this.handleContentChange}
                            labelWidth={"Comment"} 
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton onClick={this.handleSubmit}>
                            <Send />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(CommentInputItem);
