/*
* Users container
* */
import Users from './users.component';
import {
    fetchUsers,
} from "../../../store/users/users.action";
import {selectUser} from '../../../store/user-detail/user-detail.action';
import {connect} from "react-redux";

const mapStateToProps = (state, props) => {
    return {
        users: state.users.users,
        loading: state.users.loading,
    };
};

const mapDispatchToProps = {
    fetchUsers,
    selectUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users);