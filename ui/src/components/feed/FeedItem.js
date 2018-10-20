import React, { PureComponent } from 'react';
import {
    Card,
    CardHeader,
    Avatar,
    CardActions,
    IconButton,
    CardContent,
    Typography,
    withStyles,
    Collapse,
    List,
} from '@material-ui/core';
import { Favorite, ExpandMore, Share } from '@material-ui/icons';
import PropTypes from 'prop-types';
import dateformat from 'dateformat';
import cx from 'classnames';
import ImmutablePropTypes from 'react-immutable-proptypes';
import CommentInputItem from 'containers/feed/CommentInputItemContainer';
import CommentItem from 'components/feed/CommentItem';


const styles = theme => ({
    card: {
        maxWidth: 600,
        margin: '1em auto',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    likedStyle: {
        color: 'red',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
});

class FeedItem extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            liked: props.liked,
            expanded: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            ...this.state,
            liked: nextProps.liked,
        });
    }

    handleLikeClick = itemId => () => {
        this.props.onLikeClick(itemId, this.state.liked);
    };
    
    handleCommentSubmit = (content) => {
        this.props.onCommentSubmit(this.props.id, content)        
    };

    handleExpandClick = () => {
        this.setState({
            ...this.state,
            expanded: !this.state.expanded,
        });
    };
    
    renderName(fName, lName) {
        fName = fName ? fName : '';
        lName = lName ? lName : '';
        return `${fName} ${lName}`.trim();
    }
    
    renderHeader(fName, lName, date) {
        return `${this.renderName(fName, lName)} | ${dateformat(date, 'fullDate')}`
    }

    render() {
        const {
            id,
            title,
            author,
            postDate,
            content,
            comments
        } = this.props;
        const {
            liked,
            expanded,
        } = this.state;
        const {
            card,
            likedStyle,
            expandOpen,
            expand,
        } = this.props.classes;
        return (
            <Card className={card}>
                <CardHeader
                    avatar={
                        <Avatar
                            alt={author.get('firstName') + " " + author.get('lastName')}
                            src={author.get('avatarId')}
                        />
                    }
                    title={title}
                    subheader={this.renderHeader(author.get('firstName'), author.get('lastName'), postDate)}
                />
                <CardContent>
                    <Typography>
                        {content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton
                        className={cx(liked ? likedStyle : null)}
                        onClick={this.handleLikeClick(id)}
                    >
                        <Favorite />
                    </IconButton>
                    <IconButton>
                        <Share />
                    </IconButton>
                    <IconButton
                        className={cx(expanded ? expandOpen : null, expand)}
                        aria-expanded={this.state.expanded}
                        onClick={this.handleExpandClick}
                    >
                        <ExpandMore />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <List>
                        {
                            
                            comments.map(comment => (
                                <CommentItem
                                    key={comment.get('id')}
                                    content={comment.get('content')}
                                    author={comment.get('user')}
                                />
                            ))
                        }
                    </List>
                    <CommentInputItem 
                        onSubmit={this.handleCommentSubmit}
                    />
                </Collapse>
            </Card>
        );
    }
}

FeedItem.propTypes = {
    id: PropTypes.number.isRequired,
    classes: PropTypes.object.isRequired, // eslint-disable-line
    theme: PropTypes.object.isRequired, // eslint-disable-line
    title: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    author: ImmutablePropTypes.map,
    description: PropTypes.string.isRequired,
    onLikeClick: PropTypes.func.isRequired,
    postDate: PropTypes.string.isRequired,
    comments: ImmutablePropTypes.list,
};

export default withStyles(styles)(FeedItem);
