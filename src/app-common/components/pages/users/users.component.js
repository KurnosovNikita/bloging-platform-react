import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import {RESOURCE_TYPE} from '../../../../utils';
import map from 'lodash/map';
import Text from "../../../../base/text/text.component";
import Card from "../../../../common/card/card.component";
import './users.scss';

class Users extends Component {

    handleButtonClick = (event) => {
        const selectedUser = this.props.users.filter(
          (user) => user.id === Number(event.target.closest('.card').getAttribute('data-user-id')));

        this.props.selectUser({selectedUser});
    };

    componentDidMount() {
        this.props.fetchUsers(RESOURCE_TYPE.users);
    }

    render() {
        const {users} = this.props;

        const usersList = map(users, (user, index) =>
          <Card
            type='user'
            item={user}
            key={index}
            handleButtonClick={this.handleButtonClick}
          />
        );

        return (
          <Fragment>
              {users.length ? (
                <div className="users-container">
                    {usersList}
                </div>
              ) : (
                <Text className="no-results" text='No  users found'/>
              )}
          </Fragment>
        );
    };
}

Users.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    selectUser: PropTypes.func.isRequired,
};


export default Users