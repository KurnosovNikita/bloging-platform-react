import React, {Fragment} from "react";
import {connect} from "react-redux";
import PostsPage from '../../pages/posts/posts.component';
import PostDescription from '../../../../common/post-description/post-description.component';
import './post-detail.scss';

class PostDetail extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return !(this.props.posts.length === nextProps.posts.length
          && this.props.selectedPost[0].id === nextProps.selectedPost[0].id && this.props.posts.filter(
            (item, index) => item.id === nextProps.posts[index].id).length === this.props.posts.length);
    }

    render() {
        const {selectedPost} = this.props;

        return (
          <Fragment>
              <PostDescription
                selectedPost={selectedPost.selectedPost}/>
              <PostsPage handleImageClick={this.handleImageClick}/>
          </Fragment>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        selectedPost: state.postDetail.selectedPost,
    };
};

export default connect(
  mapStateToProps,
  null
)(PostDetail);
