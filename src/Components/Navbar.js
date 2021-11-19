import React, { useRef } from "react";
import { GlobalContext } from "../context";
function Navbar() {
	const { changeCount } = GlobalContext();
	return (
		<nav className="nav-center">
			<div className="nav-title">SortViZ</div>
			<div className="nav-count">
				<label htmlFor="points">Size</label>
				<input
					type="range"
					id="count"
					className="input"
					name="count"
					min="0"
					max="100"
					onChange={changeCount}
				></input>
			</div>
			<div className="nav-delay">
				<label htmlFor="delay">Speed</label>
				<input type="range" id="delay" className="input" name="delay" min="0" max="100"></input>
			</div>
		</nav>
	);
}
export default Navbar;
