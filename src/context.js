import React from "react";
import { useContext, useEffect, useState } from "react";
import { generateRandomNumber, Algorithms } from "./helper";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [arr, setArr] = useState([]);
	const [count, setCount] = useState(50);
	const [speed, setSpeed] = useState(50);
	const [algo, setAlgo] = useState("BubbleSort");
	const [color, setColor] = useState([]);
	const [disable, setDisable] = useState(false);

	const generateRandomArray = (count) => {
		const arr = [];
		for (let i = 0; i < count; i++) {
			arr.push(generateRandomNumber(10, 600));
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
		console.log(speed);
		return new Promise((resolve) => {
			setTimeout(resolve, 1);
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
		await playAnimation(arrSteps, colorSteps);
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
