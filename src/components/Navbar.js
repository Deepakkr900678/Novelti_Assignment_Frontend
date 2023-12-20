import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function Navbar({ message }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container">
        <Link className="navbar-brand text-white" to="/">
          {message}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/alluser">
                All Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/adduser">
                Add New User
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  message: state.message,
});

export default connect(mapStateToProps)(Navbar);

