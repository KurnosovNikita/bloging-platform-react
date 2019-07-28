import React from "react";
import {Link} from 'react-router-dom';
import './post-card.scss';
import Button from "../../base/button/button.component";

class PostCard extends React.PureComponent {

    render() {
        const {id, userId, title, body} = this.props.post;

        return (

          <div className="card" data-post-id={id}>
              <div className="card-context">
                  <div className="card-title">{title}</div>
                  <div className="card-subtitle">{body}</div>
                  <Link to={`/post/${id}`}>
                      <Button className="show-detail" text="Show more" onClick={this.props.handleButtonClick}/>
                  </Link>
                  <span className="card-label">{userId}</span>
              </div>
          </div>

        );
    }
}

export default PostCard;