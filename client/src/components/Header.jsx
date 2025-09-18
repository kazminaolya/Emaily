import React from 'react';
import { useSelector } from "react-redux";

import { Link } from 'react-router-dom';

const Header = () => {
  const user = useSelector(state => state.auth);

  const renderContent = () => {
    switch (user) {
      case null:
        return;
      case false:
        return (
            <li><a href="/auth/google">Login with Google</a></li>
        );
      default:
        return (
            <li><a href="/api/logout">Logout</a></li>
        );
    }
  };

  return <nav className="indigo">
    <div className="nav-wrapper container">
      <Link
        to={user ? '/surveys' : ''}
        className="left brand-logo">
        Emaily
      </Link>
      <ul id="nav-mobile" className="right">
        { renderContent()}
      </ul>
    </div>
  </nav>
}

export default Header;
