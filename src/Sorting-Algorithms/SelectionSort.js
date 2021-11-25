import { swap } from "../helper";

function SelectionSort(arr, color) {
	const l = arr.length;
	const newArr = arr.slice();
	const newColor = color.slice();
	const arrSteps = [];
	const colorSteps = [];
	for (let i = 0; i < l - 1; i++) {
		let min = i;
		for (let j = i + 1; j < l; j++) {
			newColor[min] = 1;
			newColor[j] = 1;
			colorSteps.push(newColor.slice());
			arrSteps.push(newArr.slice());
			newColor[min] = 0;
			newColor[j] = 0;
			if (newArr[min] > newArr[j]) {
				min = j;
			}
		}
		newColor[i] = 2;
		newColor[min] = 2;
		colorSteps.push(newColor.slice());
		arrSteps.push(newArr.slice());
		swap(newArr, i, min);
		newColor[min] = 0;
		newColor[i] = 3;
		colorSteps.push(newColor.slice());
		arrSteps.push(newArr.slice());
	}
	colorSteps[colorSteps.length - 1] = new Array(newArr.length).fill(3);
	return { arrSteps, colorSteps };
}
export default SelectionSort;
