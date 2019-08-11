import React, {Component} from "react";
import './user-detail.scss';

class UserDetail extends Component {

    render() {
        const {selectedUser: {selectedUser: selectedUser}} = this.props;
        const {
            name,
            website,
            phone,
            email,
            username,
            company,
            address
        } = selectedUser[0];

        return (
          <div className="card-description">
              <div className="card-name">Name: {name}</div>
              <div className="card-username">Username: {username}</div>
              <div className="card-email">Email: {email}</div>
              <div className="card-address">Address: {address.street} {address.suite} {address.zipcode}</div>
              <div className="card-website">Website: {website}</div>
              <div className="card-phone">Phone: {phone}</div>
              <div className="card-company-name">Company name: {company.name}</div>
              <div className="card-company-phrase">Company catchPhrase: {company.catchPhrase}</div>
              <div className="card-company-bs">Company bs: {company.bs}</div>
          </div>
        );
    }
}

export default UserDetail
