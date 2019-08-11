/*
* User Detail container
* */
import UserDetail from './user-detail.component';
import {connect} from "react-redux";

const mapStateToProps = (state, props) => {
    return {
        selectedUser: state.userDetail.selectedUser,
    };
};

export default connect(
  mapStateToProps,
  null,
)(UserDetail);