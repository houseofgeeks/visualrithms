import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid text-bg-warning p-3">
          <a class="navbar-brand text-primary fs-3" href="/">Visualrithms</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle fs-4" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Applications
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/linearsearch">Linear Search</a></li>
                  <li><a class="dropdown-item" href="/binarysearch">Binary Search</a></li>
                  <li><a class="dropdown-item" href="/sorting">Sorting</a></li>
                  <li><a class="dropdown-item" href="/breadthfirstsearch">Breadth First Search</a></li>
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
