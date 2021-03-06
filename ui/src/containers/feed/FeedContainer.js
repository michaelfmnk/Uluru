import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import FeedItem from 'components/feed/FeedItem';
import PropTypes from 'prop-types';
import ProfilePopup from 'containers/layout/ProfilePopupContainer';
import { connect } from 'react-redux';
import { getFeedItems } from 'selectors/posts';
import { likePostItem, loadFeed, sendComment } from 'actions/feed';
import { Grid, Button, withStyles } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import PostCreationModel from 'containers/feed/PostCreationContainer';

const styles = theme => ({
   button: {
       margin: theme.spacing.unit,
       position: 'fixed',
       bottom: 40,
       right: 50,
   } 
});

class FeedContainer extends Component {
    
    static state = {
        postCreationShown: false,    
    };
    
    componentWillMount() {
        this.props.loadFeed();
    };
    
    handleLikeClick = (itemId, liked) => {
        this.props.likePostItem(itemId, liked);
    };
    
    handleCommentSubmit = (postId, content) => {
        this.props.sendComment(postId, content);
    };
    
    handleCreatePostClick = () => {
        this.setState({
            postCreationShown: true,
        });
    };
    
    handleDismissPostCreation = () => {
        this.setState({
            postCreationShown: false,
        });
    };
    
    render() {
        const {
            items,
            classes,
        } = this.props;
        console.log(this.state);
        return (
            <div>
            <Grid container spacing={1}>
                <Grid item xs={7}>
                    {
                        items.map(item => (
                            <FeedItem
                                key={item.get('id')}
                                id={item.get('id')}
                                content={item.get('content')}
                                liked={item.get('liked')}
                                postDate={item.get('date')}
                                author={item.get('user')}
                                comments={item.get('comments')}
                                onLikeClick={this.handleLikeClick}
                                onCommentSubmit={this.handleCommentSubmit}
                            />
                        ))
                    }
                </Grid>
                <Grid 
                    item 
                    xs={5}
                >
                    <div style={{'position': 'fixed', 'width': '50em'}}>
                        <ProfilePopup />
                    </div>
                </Grid>
                <Button
                    variant={"fab"}
                    onClick={this.handleCreatePostClick}
                    color={"primary"} 
                    className={classes.button}
                >
                    <Add />
                </Button>
            </Grid>
                { 
                    this.state && this.state.postCreationShown && 
                        <PostCreationModel 
                            handleClose={this.handleDismissPostCreation}
                        /> 
                }
            </div>
        );
    }
}

FeedContainer.propTypes = {
    items: ImmutablePropTypes.map,
    likePostItem: PropTypes.func.isRequired,
    loadFeed: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    items: getFeedItems(state),
});

export default connect(mapStateToProps, { likePostItem, loadFeed, sendComment })(withStyles(styles)(FeedContainer));
