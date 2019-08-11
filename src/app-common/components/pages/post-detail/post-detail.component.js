import React, {Component} from "react";
import Button from '../../../../base/button/button.component';
import {Link} from 'react-router-dom';
import './post-detail.scss';

class PostDetail extends Component {

    render() {
        const {
            selectedPost: {selectedPost: selectedPost},
            handleButtonClick
        } = this.props;
        const {userId, title, body} = selectedPost[0];

        return (
          <div className="card-description">
              <div className="card-title">{title}</div>
              <div className="card-body">{body}</div>
              <div className="card-context">
                  <Link to='/posts'>
                      <Button
                        className="back-to-posts"
                        text="Back to posts"
                        onClick={handleButtonClick}
                      />
                  </Link>
                  <span className="card-label">{userId}</span>
              </div>
          </div>
        );
    }
}

export default PostDetail