import React from "react";
import { useContext, useEffect, useState } from "react";
import BubbleSort from "./Sorting-Algorithms/BubbleSort";
import InsertionSort from "./Sorting-Algorithms/InsertionSort";
import MergeSort from "./Sorting-Algorithms/MergeSort";
import QuickSort from "./Sorting-Algorithms/QuickSort";
import SelectionSort from "./Sorting-Algorithms/SelectionSort";
// const initialState = {
// 	arr: [],
// 	count: 0,
// 	delay: 0,
// 	algorithm: "",
// };
const AppContext = React.createContext();
const Algorithms = {
	BubbleSort: BubbleSort,
	InsertionSort: InsertionSort,
	MergeSort: MergeSort,
	QuickSort: QuickSort,
	SelectionSort: SelectionSort,
};
const AppProvider = ({ children }) => {
	const [arr, setArr] = useState([]);
	const [count, setCount] = useState(50);
	const [algo, setAlgo] = useState("BubbleSort");
	const [disable, setDisable] = useState(false);
	const generateRandomNumber = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min);
	};
	const generateRandomArray = (count) => {
		const arr = [];
		for (let i = 0; i < count; i++) {
			arr.push(generateRandomNumber(100, 600));
		}
		setArr(arr);
	};
	const changeCount = (e) => {
		setCount(e.target.value);
	};
	const changeAlgo = (e) => {
		setAlgo(e.target.value);
	};
	const startSort = () => {
		console.log("Start pressed");
		setDisable(true);
		Algorithms[algo]();
		setDisable(false);
	};
	useEffect(() => {
		generateRandomArray(count);
	}, [count]);
	return (
		<AppContext.Provider
			value={{
				generateRandomArray,
				arr,
				setArr,
				changeCount,
				count,
				startSort,
				changeAlgo,
				disable,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
const GlobalContext = () => {
	return useContext(AppContext);
};
export { AppContext, AppProvider, GlobalContext };
