/*
* Post Detail container
* */
import PostDetail from './post-detail.component';
import {connect} from "react-redux";

const mapStateToProps = (state, props) => {
    return {
        selectedPost: state.postDetail.selectedPost,
    };
};

export default connect(
  mapStateToProps,
  null
)(PostDetail);
