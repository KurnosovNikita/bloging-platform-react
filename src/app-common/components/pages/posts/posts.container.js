/*
* Posts container
* */
import Posts from './posts.component';
import {
    fetchPosts,
} from "../../../store/posts/posts.action";
import {selectPost} from '../../../store/post-detail/post-detail.action';
import {connect} from "react-redux";

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