import { swap } from "../helper";
function BubbleSort(arr, color) {
	const l = arr.length;
	const newArr = arr.slice();
	const newColor = color.slice();
	const arrSteps = [];
	const colorSteps = [];
	for (let i = 0; i < l - 1; i++) {
		for (let j = 0; j < l - i - 1; j++) {
			newColor[j] = 1;
			newColor[j + 1] = 1;
			colorSteps.push(newColor.slice());
			arrSteps.push(newArr.slice());
			if (newArr[j] > newArr[j + 1]) {
				swap(newArr, j, j + 1);
				newColor[j] = 2;
				newColor[j + 1] = 2;
				colorSteps.push(newColor.slice());
				arrSteps.push(newArr.slice());
			}
			newColor[j] = 0;
			newColor[j + 1] = 0;
		}
		newColor[newArr.length - 1 - i] = 3;
		arrSteps.push(newArr.slice());
		colorSteps.push(newColor.slice());
	}
	colorSteps[colorSteps.length - 1] = new Array(newArr.length).fill(3);
	// console.log(arrSteps);
	return { arrSteps, colorSteps };
}
export default BubbleSort;
