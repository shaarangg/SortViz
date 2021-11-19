import React from "react";
import { useContext, useEffect, useState } from "react";
// const initialState = {
// 	arr: [],
// 	count: 0,
// 	delay: 0,
// 	algorithm: "",
// };
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
	const [arr, setArr] = useState([]);
	const [count, setCount] = useState(50);
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
		console.log(count);
	};
	useEffect(() => {
		generateRandomArray(count);
	}, [count]);
	return (
		<AppContext.Provider value={{ generateRandomArray, arr, setArr, changeCount }}>
			{children}
		</AppContext.Provider>
	);
};
const GlobalContext = () => {
	return useContext(AppContext);
};
export { AppContext, AppProvider, GlobalContext };
