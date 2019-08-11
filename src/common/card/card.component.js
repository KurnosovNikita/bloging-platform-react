import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';
import './card.scss';
import Button from "../../base/button/button.component";

class Card extends Component {

    render() {
        const {item, type, handleButtonClick} = this.props;

        return (
          <Fragment>
              {type === 'post' ? (
                <div className="card" data-post-id={item.id}>
                    <div className="card-context">
                        <div className="card-title">{item.title}</div>
                        <div className="card-subtitle">{item.body}</div>
                        <Link to={`/post/${item.id}`}>
                            <Button className="show-detail" text="Show more" onClick={handleButtonClick}/>
                        </Link>
                        <span className="card-label">User id: {item.userId}</span>
                    </div>
                </div>) : (
                <div className="card" data-user-id={item.id}>
                    <div className="card-context">
                        <div className="card-name">{item.name}</div>
                        <div className="card-email">{item.email}</div>
                        <div className="card-phone">{item.phone}</div>
                        <div className="card-website">{item.website}</div>
                        <div className="card-username">{item.username}</div>
                        <Link to={`/user/${item.id}`}>
                            <Button className="show-detail" text="Show more" onClick={handleButtonClick}/>
                        </Link>
                    </div>
                </div>
              )}
          </Fragment>
        );
    }
}

export default Card;