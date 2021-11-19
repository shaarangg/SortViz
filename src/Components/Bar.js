import React from "react";
import { GlobalContext } from "../context";
function Bar() {
	const { arr } = GlobalContext();
	return (
		<main className="bar-container">
			{arr.map((value, index) => {
				return <div id={index} className="bar" style={{ height: `${value}px` }}></div>;
			})}
		</main>
	);
}

export default Bar;
