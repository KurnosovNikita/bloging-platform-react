import React, {Fragment, Component} from "react";
import PropTypes from "prop-types";
import {RESOURCE_TYPE} from '../../../../utils';
import map from 'lodash/map';
import './posts.scss';
import Text from "../../../../base/text/text.component";
import Card from "../../../../common/card/card.component";

class Posts extends Component {

    handleButtonClick = (event) => {
        const selectedPost = this.props.posts.filter(
          (post) => post.id === Number(event.target.closest('.card').getAttribute('data-post-id')));

        this.props.selectPost({selectedPost});
    };

    componentDidMount() {
        this.props.fetchPosts(RESOURCE_TYPE.posts);
    }

    render() {
        const {posts} = this.props;

        const postsList = map(posts, (post, index) =>
          <Card
            type='post'
            item={post}
            key={index}
            handleButtonClick={this.handleButtonClick}
          />
        );

        return (
          <Fragment>
              {posts.length ? (
                <div className="posts-container">
                    {postsList}
                </div>
              ) : (
                <Text className="no-results" text='No  posts found'/>
              )}
          </Fragment>
        );
    };
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    selectPost: PropTypes.func.isRequired,
};

export default Posts