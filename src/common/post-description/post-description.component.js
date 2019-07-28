import React from "react";
import Button from '../../base/button/button.component';
import Text from '../../base/text/text.component';
import {Link} from 'react-router-dom';
import './post-description.scss';

class MovieDescription extends React.PureComponent {
    render() {
        const {id, userId, title, body} = this.props.selectedPost[0];

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

export default MovieDescription;
