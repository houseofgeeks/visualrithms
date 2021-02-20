import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="container">
        <div className="title">
          <Link to="/">Visualrithms</Link>
        </div>
        <div className="navItems">
          <Link to="/linearsearch" className="linear">
            LinearSearch
          </Link>
          <Link to="/binarysearch" className="nav-link">
            BinarySearch
          </Link>
          <Link to="/sorting" className="nav-link">
            Sorting
          </Link>
          <Link to="/breadthfirstsearch" className="nav-link">
            BreadthFirstSearch
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
