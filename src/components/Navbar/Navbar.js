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
					<Link to="/binarysearch">BinarySearch</Link>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
