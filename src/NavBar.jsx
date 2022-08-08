import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <span className="navbar-brand">Intensive Foods</span>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Foods
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/customers">
            Customers
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="orders">
            Orders
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
