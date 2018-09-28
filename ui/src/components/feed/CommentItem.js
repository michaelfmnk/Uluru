import React, { PureComponent } from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';


class CommentItem extends PureComponent {
    render() {
        const {
            content,
            author,
        } = this.props;
        return (
            <ListItem>
                <ListItemAvatar>
                    <Avatar
                        src={author.get('avatar')}
                    />
                </ListItemAvatar>
                <ListItemText secondary={content}>
                    {author.get('name')}
                </ListItemText>
            </ListItem>
        );
    }
}

CommentItem.propTypes = {
    content: PropTypes.string.isRequired,
    author: ImmutablePropTypes.Map,
};

export default CommentItem;
