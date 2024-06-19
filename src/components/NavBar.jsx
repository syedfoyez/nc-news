import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const NavBar = ({ user }) => {
  console.log(user)
  if(!user){
    return (
      <h1>
        loading...
      </h1>
    )
  }
  return (

    <>
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      <Link to={`/profile/${user.username}`}>{user.name}</Link>
    </nav>

    <Outlet />
    </>
  );
};

export default NavBar;