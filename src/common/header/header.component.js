import React, {Component} from 'react';
import map from 'lodash/map';
import {Link} from 'react-router-dom';
import './header.scss';

class Header extends Component {
    render() {
        const {pages} = this.props;

        const NavList = map(pages, (page, index) =>
          <Link to={`/${page.href}`} key={index + 'key'}>
              <li className="nav-element">
                  {page.name}
              </li>
          </Link>
        );
        return (
          <header className='header'>
              <div className="nav-bar">
                  <ul className="nav-list">
                      {NavList}
                  </ul>
              </div>
          </header>
        );
    }
}

export default Header;