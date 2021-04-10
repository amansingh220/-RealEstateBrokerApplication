import React from "react";
import '../stylesheets/header.css'
import { FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
      <div className="container ml-5">
      <div className="container px-1 ml-4">
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
      <div>
        <div
          className="navbar-collapse collapse justify-content-center mr-5 px-1"
          id="navbarDefault"
        >
          <ul className="navbar-nav px-1">
            <li className="nav-item ml-5">
              <a className="nav-link"  href="/dashboard">
                Home
              </a>
            </li>

            <li className="nav-item ml-4">
              <a className="nav-link" href="/customers">
                Customers
              </a>
            </li>

            <li className="nav-item ml-4">
              <a className="nav-link " href="#">
              Property
              </a>
            </li>

            <li className="nav-item ml-4">
              <a className="nav-link " href="contact">
                Contact
              </a>
            </li>

            <li className="nav-item ml-4">
              <a className="nav-link " href="#">
                About
              </a>
            </li>
            <li className="nav-item ml-4">
              <a className="nav-link " href="/profile">
                Profile
              </a>
            </li>
          </ul>
          </div>
        </div>
      </div>

      </div>
      <div className="mr-5">
        <button
          className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse mr-5"
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