import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <header>
      <div className="logo">
        <strong>
          <h2>
            <Link to="/">Support Desk</Link>
          </h2>
        </strong>
      </div>
      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser /> Register
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
