import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ user }) => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      <Link to={`/profile/${user.username}`}>{user.name}</Link>
    </nav>
  );
};

export default NavBar;