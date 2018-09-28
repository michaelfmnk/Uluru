import React, { PureComponent } from 'react';
import {
    Card,
    CardMedia,
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
import { Favorite, ExpandMore } from '@material-ui/icons';
import PropTypes from 'prop-types';
import dateformat from 'dateformat';
import cx from 'classnames';
import CommentItem from 'components/feed/CommentItem';
import ImmutablePropTypes from 'react-immutable-proptypes';


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
        this.props.onLikeClick(itemId);
    };

    handleExpandClick = () => {
        this.setState({
            ...this.state,
            expanded: !this.state.expanded,
        });
    }

    render() {
        const {
            id,
            title,
            photoUrl,
            author,
            postDate,
            description,
            comments,
        } = this.props;
        const {
            liked,
            expanded,
        } = this.state;
        const {
            card,
            media,
            likedStyle,
            expandOpen,
            expand,
        } = this.props.classes;
        return (
            <Card className={card}>
                <CardHeader
                    avatar={
                        <Avatar
                            alt={author.get('name')}
                            src={author.get('avatar')}
                        />
                    }
                    title={title}
                    subheader={`${author.get('name')}   |   ${dateformat(postDate, 'fullDate')}`}
                />
                <CardMedia
                    className={media}
                    image={photoUrl}
                />
                <CardContent>
                    <Typography>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton
                        className={cx(liked ? likedStyle : null)}
                        onClick={this.handleLikeClick(id)}
                    >
                        <Favorite />
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
                                    author={comment.get('author')}
                                />
                            ))
                        }
                    </List>
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
