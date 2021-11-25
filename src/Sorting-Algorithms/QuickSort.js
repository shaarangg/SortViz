import { swap } from "../helper";
function partition(newArr, left, right, newColor, arrSteps, colorSteps) {
	let pivot = newArr[right];
	let i = left - 1;
	newColor[right] = 1;
	for (let j = left; j < right; j++) {
		newColor[j] = 1;
		colorSteps.push(newColor.slice());
		arrSteps.push(newArr.slice());
		if (newArr[j] < pivot) {
			i++;
			if (i !== j) {
				swap(newArr, i, j);
				newColor[j] = 2;
				newColor[i] = 2;
				colorSteps.push(newColor.slice());
				arrSteps.push(newArr.slice());
			}
		}
		newColor[j] = 0;
		newColor[i] = 0;
		colorSteps.push(newColor.slice());
		arrSteps.push(newArr.slice());
	}
	newColor[i + 1] = 2;
	newColor[right] = 2;
	colorSteps.push(newColor.slice());
	arrSteps.push(newArr.slice());
	swap(newArr, i + 1, right);
	newColor[right] = 0;
	newColor[i + 1] = 3;
	colorSteps.push(newColor.slice());
	arrSteps.push(newArr.slice());
	return i + 1;
}
function quickSortHelper(newArr, left, right, newColor, arrSteps, colorSteps) {
	if (left < right) {
		const pivot = partition(newArr, left, right, newColor, arrSteps, colorSteps);
		quickSortHelper(newArr, left, pivot - 1, newColor, arrSteps, colorSteps);
		quickSortHelper(newArr, pivot + 1, right, newColor, arrSteps, colorSteps);
	}
}
function QuickSort(arr, color) {
	const newArr = arr.slice();
	const newColor = color.slice();
	const arrSteps = [];
	const colorSteps = [];
	quickSortHelper(newArr, 0, newArr.length - 1, newColor, arrSteps, colorSteps);
	colorSteps[colorSteps.length - 1] = new Array(newArr.length).fill(3);
	return { arrSteps, colorSteps };
}
export default QuickSort;
