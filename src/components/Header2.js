import React from "react";
import '../rbacss/header.css'
import { FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
      <div className="container">
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        </button>
        <a className="navbar-brand text-brand" href="/">
          Estate<span className="color-b">Agency</span>
        </a>

        <div
          className="navbar-collapse collapse justify-content-center"
          id="navbarDefault"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link"  href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/signup_signin">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="#">
              Property
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="#">
                Contact
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/signup_signin">
                Login/Register
              </a>
            </li>
          </ul>
        </div>

        <button
          className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
        >
          <FaSearch/>
        </button>
      </div>
    </nav>
  );
}

export default Header;