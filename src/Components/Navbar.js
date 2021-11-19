import React from "react";
import { GlobalContext } from "../context";
function Navbar() {
	const { changeCount, generateRandomArray, count, startSort, changeAlgo } = GlobalContext();
	const generateArray = () => {
		generateRandomArray(count);
	};
	return (
		<nav className="nav-center">
			<div className="nav-title">SortViZ</div>
			<div className="range-input">
				<div className="nav-count">
					<label htmlFor="points">Size</label>
					<input
						type="range"
						id="count"
						className="count-input"
						name="count"
						min="20"
						max="120"
						onChange={changeCount}
					></input>
				</div>
				<div className="nav-delay">
					<label htmlFor="delay">Speed</label>
					<input
						type="range"
						id="delay"
						className="delay-input"
						name="delay"
						min="0"
						max="100"
					></input>
				</div>
			</div>
			<div className="algo">
				<label htmlFor="algorithm">Algorithm</label>
				<select name="algorithm" id="algorithm" onChange={changeAlgo}>
					<option defaultValue value="BubbleSort">
						Bubble Sort
					</option>
					<option value="InsertionSort">Insertion Sort</option>
					<option value="MergeSort">Merge Sort</option>
					<option value="QuickSort">Quick Sort</option>
					<option value="SelectionSort">Selection Sort</option>
				</select>
			</div>
			<div className="nav-btn">
				<button type="button" className="btn" onClick={generateArray}>
					New Array
				</button>
				<button type="button" className="btn" onClick={startSort}>
					Start
				</button>
			</div>
		</nav>
	);
}
export default Navbar;
