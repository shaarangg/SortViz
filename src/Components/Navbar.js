import React, { useRef } from "react";
import { GlobalContext } from "../context";
function Navbar() {
	const { changeCount } = GlobalContext();
	return (
		<nav className="nav-center">
			<div className="nav-title">SortViZ</div>
			<input
				type="range"
				id="points"
				className="input"
				name="points"
				min="0"
				max="100"
				onChange={changeCount}
			></input>
			<input type="range" id="points" className="input" name="points" min="0" max="100"></input>
		</nav>
	);
}
export default Navbar;
