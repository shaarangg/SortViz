import React from "react";
import { useContext, useEffect, useState } from "react";
import BubbleSort from "./Sorting-Algorithms/BubbleSort";
import MergeSort from "./Sorting-Algorithms/MergeSort";
import QuickSort from "./Sorting-Algorithms/QuickSort";
import SelectionSort from "./Sorting-Algorithms/SelectionSort";

const AppContext = React.createContext();
const Algorithms = {
	BubbleSort: BubbleSort,
	MergeSort: MergeSort,
	QuickSort: QuickSort,
	SelectionSort: SelectionSort,
};

const AppProvider = ({ children }) => {
	const [arr, setArr] = useState([]);
	const [count, setCount] = useState(50);
	const [speed, setSpeed] = useState(50);
	const [algo, setAlgo] = useState("BubbleSort");
	const [color, setColor] = useState([]);
	const [disable, setDisable] = useState(false);
	const generateRandomNumber = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min);
	};
	const generateRandomArray = (count) => {
		const arr = [];
		for (let i = 0; i < count; i++) {
			arr.push(generateRandomNumber(100, 600));
		}
		const color = Array(arr.length).fill(0);
		setArr(arr);
		setColor(color);
	};
	const changeCount = (e) => {
		setCount(e.target.value);
	};
	const changeSpeed = (e) => {
		setSpeed(e.target.value);
	};
	const changeAlgo = (e) => {
		setAlgo(e.target.value);
	};
	const sleep = () => {
		return new Promise((resolve) => {
			setTimeout(resolve, 10);
		});
	};
	const playAnimation = async (arrSteps, colorSteps) => {
		for (let i = 0; i < arrSteps.length; i++) {
			await sleep();
			setArr(arrSteps[i]);
			setColor(colorSteps[i]);
		}
	};
	const startSort = async () => {
		console.log("Start pressed");
		setDisable(true);
		const { arrSteps, colorSteps } = Algorithms[algo](arr, color);
		// await playAnimation(arrSteps, colorSteps);
		// console.log(arrSteps.length, colorSteps.length);
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
				changeSpeed,
				count,
				speed,
				color,
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
