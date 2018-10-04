import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { getFeedItems } from 'selectors/posts';
import FeedItem from 'components/feed/FeedItem';
import { likePostItem, loadFeed } from 'actions/feed';
import PropTypes from 'prop-types';

class FeedContainer extends PureComponent {
    componentWillMount() {
        this.props.loadFeed();
    }
    handleLikeClick = (itemId) => {
        this.props.likePostItem(itemId);
        this.props.loadFeed();
    };
    render() {
        const {
            items,
        } = this.props;
        return (
            <div>
                {
                    items.map(item => (
                        <FeedItem
                            key={item.get('id')}
                            id={item.get('id')}
                            content={item.get('content')}
                            liked={item.get('liked')}
                            postDate={item.get('date')}
                            author={item.get('user')}
                            onLikeClick={this.handleLikeClick}
                        />
                    ))
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

export default connect(mapStateToProps, { likePostItem, loadFeed })(FeedContainer);
