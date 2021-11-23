import React from "react";
import { GlobalContext } from "../context";
function Bar() {
	const { arr, color } = GlobalContext();
	const Colors = ["#01d5fe", "#F37121", "#F05454"];
	return (
		<main className="bar-container">
			{arr.map((value, index) => {
				const cl = color[index];
				return (
					<div
						key={index}
						className="bar"
						style={{ height: `${value}px`, backgroundColor: `${Colors[cl]}` }}
					></div>
				);
			})}
		</main>
	);
}

export default Bar;
