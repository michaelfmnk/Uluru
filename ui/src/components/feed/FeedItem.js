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
} from '@material-ui/core';
import { Favorite, ExpandMore, Share } from '@material-ui/icons';
import PropTypes from 'prop-types';
import dateformat from 'dateformat';
import cx from 'classnames';
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
    };

    render() {
        const {
            id,
            title,
            author,
            postDate,
            content,
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
                    subheader={`${author.get('firstName')} ${author.get('lastName')}  |   ${dateformat(postDate, 'fullDate')}`}
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
                    {/*<List>*/}
                        {/*{*/}
                            {/*comments.map(comment => (*/}
                                {/*<CommentItem*/}
                                    {/*key={comment.get('id')}*/}
                                    {/*content={comment.get('content')}*/}
                                    {/*author={comment.get('author')}*/}
                                {/*/>*/}
                            {/*))*/}
                        {/*}*/}
                    {/*</List>*/}
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
