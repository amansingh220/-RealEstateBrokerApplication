import React from "react";
import '../RBAcss/header.css'
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
        <a className="navbar-brand text-brand" href="/dashboard">
          RealEstate<span className="color-b">Broker</span>
        </a>
        

        <div
          className="navbar-collapse collapse justify-content-center"
          id="navbarDefault"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link"  href="/dashboard">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/customers">
                Customers
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
              <a className="nav-link " href="/profile">
                Profile
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