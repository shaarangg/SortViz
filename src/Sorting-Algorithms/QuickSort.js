import { swap } from "./helper";
function partition(arr, left, right) {
	let pivot = arr[right];
	let i = left - 1;
	for (let j = left; j < right; j++) {
		if (arr[j] < pivot) {
			i++;
			swap(arr, i, j);
		}
	}
	swap(arr, i + 1, right);
	return i + 1;
}
function quickSortHelper(arr, left, right) {
	if (left < right) {
		const pivot = partition(arr, left, right);
		quickSortHelper(arr, left, pivot - 1);
		quickSortHelper(arr, pivot + 1, right);
	}
}
function QuickSort(arr, color) {
	const newArr = arr.slice();
	const arrSteps = [];
	const colorSteps = [];
	quickSortHelper(newArr, 0, newArr.length - 1);
	console.log(newArr);
	// console.log("QuickSort");
	return { arrSteps, colorSteps };
}
export default QuickSort;
