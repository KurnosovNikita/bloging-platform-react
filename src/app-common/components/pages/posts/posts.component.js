import React, {Fragment} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {RESOURCE_TYPE} from '../../../../utils';
import map from 'lodash/map';
import {
    fetchPosts,
} from "../../../store/posts/posts.action";
import {selectPost} from '../../../store/post-detail/post-detail.action';
import './posts.scss';
import Text from "../../../../base/text/text.component";
import PostCard from "../../../../common/post-card/post-card.component";

class Posts extends React.Component {

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
          <PostCard post={post} key={index} handleButtonClick={this.handleButtonClick}/>
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

const mapStateToProps = (state, props) => {
    return {
        posts: state.posts.posts,
        loading: state.posts.loading,
    };
};

const mapDispatchToProps = {
    fetchPosts,
    selectPost,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);