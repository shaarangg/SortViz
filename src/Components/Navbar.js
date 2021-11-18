import React from "react";
import { GlobalContext } from "../context";
function Navbar() {
	return (
		<nav className="nav-center">
			<div className="nav-title">SortViZ</div>
			<input type="range" id="points" name="points" min="0" max="10"></input>
			<input type="range" id="points" name="points" min="0" max="10"></input>
		</nav>
	);
}
export default Navbar;
