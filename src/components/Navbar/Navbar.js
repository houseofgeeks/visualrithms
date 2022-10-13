import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid text-bg-warning p-3">
          <a className="navbar-brand text-primary fs-3" href="/">Visualrithms</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <href className="nav-link dropdown-toggle fs-4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Applications
                </href>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/linearsearch">Linear Search</a></li>
                  <li><a className="dropdown-item" href="/binarysearch">Binary Search</a></li>
                  <li><a className="dropdown-item" href="/sorting">Sorting</a></li>
                  <li><a className="dropdown-item" href="/breadthfirstsearch">Breadth First Search</a></li>
                </ul>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
