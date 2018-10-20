import React, { PureComponent } from 'react';
import { toJS } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import FeedItem from 'components/feed/FeedItem';
import PropTypes from 'prop-types';
import ProfilePopup from 'containers/layout/ProfilePopupContainer';
import { connect } from 'react-redux';
import { getFeedItems } from 'selectors/posts';
import { likePostItem, loadFeed, sendComment } from 'actions/feed';
import { Grid, Button, withStyles } from '@material-ui/core';
import { Add } from '@material-ui/icons';

const styles = theme => ({
   button: {
       margin: theme.spacing.unit,
       position: 'fixed',
       bottom: 40,
       right: 50,
   } 
});

class FeedContainer extends PureComponent {
    componentWillMount() {
        this.props.loadFeed();
    };
    
    handleLikeClick = (itemId, liked) => {
        this.props.likePostItem(itemId, liked);
    };
    
    handleCommentSubmit = (postId, content) => {
        this.props.sendComment(postId, content);
    };
    
    render() {
        const {
            items,
            classes,
        } = this.props;
        console.log(items.toJS());
        return (
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
                    color={"primary"} 
                    className={classes.button}
                >
                    <Add />
                </Button>
            </Grid>
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
