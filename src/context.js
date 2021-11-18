import React from "react";
import { useContext, useEffect } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
	const generateRandomNumber = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min);
	};
	const generateRandomArray = (count) => {
		const arr = new Array();
		for (let i = 0; i < count; i++) {
			arr.push(generateRandomNumber(100, 300));
		}
		console.log(arr);
	};
	useEffect(() => {
		generateRandomArray(10);
	}, []);
	return <AppContext.Provider value={{ generateRandomArray }}>{children}</AppContext.Provider>;
};
const useGlobalContext = () => {
	return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
