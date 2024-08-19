import React from 'react';

function Navbar({ currentUser, loadPage, logout }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#" onClick={() => loadPage('home')}>Home</a>
        <a href="#" onClick={() => loadPage('new')}>New Ticket</a>
      </div>
      <div className="navbar-right">
        <span id="login-status">
          {currentUser ? `Welcome, ${currentUser.username}!` : ''}
        </span>
        <a href="#" onClick={currentUser ? logout : () => loadPage('login')}>
          {currentUser ? 'Logout' : 'Login'}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;