import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <nav className="nav-bar">
      <Link className="nav-bar__link" to="/">
        Home
      </Link>
      <Link className="nav-bar__link nav-bar__link--text-red" to="/pokemon">
        Pokemon
      </Link>
    </nav>
  );
}

export default Header;