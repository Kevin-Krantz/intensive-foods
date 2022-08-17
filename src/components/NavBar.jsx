import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Intensive Foods
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/foods">
              Foods
            </NavLink>
            <NavLink className="nav-link" to="/customers">
              Customers
            </NavLink>
            <NavLink className="nav-link" to="/orders">
              Orders
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Log In
            </NavLink>
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
