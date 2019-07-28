import React from 'react';
import map from 'lodash/map';
import {Link} from 'react-router-dom';
import './header.scss';

class Header extends React.PureComponent {
    render() {
        const {pages} = this.props;

        const NavList = map(pages, (page, index) =>
          <Link to={`/${page.href}`}>
              <li className="nav-element" key={index + 'key'}>
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