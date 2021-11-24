function merge(firstHalf, secondHalf) {
	const sortedArray = [];
	let i = 0,
		j = 0;
	while (i < firstHalf.length && j < secondHalf.length) {
		if (firstHalf[i] < secondHalf[j]) {
			sortedArray.push(firstHalf[i++]);
		} else {
			sortedArray.push(secondHalf[j++]);
		}
	}
	while (i < firstHalf.length) sortedArray.push(firstHalf[i++]);
	while (j < secondHalf.length) sortedArray.push(secondHalf[j++]);
	return sortedArray;
}
function mergeSortHelper(newArr) {
	const l = newArr.length;
	if (l === 1) {
		return newArr;
	}
	const m = Math.floor(l / 2);
	const firstHalf = mergeSortHelper(newArr.slice(0, m));
	const secondHalf = mergeSortHelper(newArr.slice(m, l));
	const sortedArray = merge(firstHalf, secondHalf);
	return sortedArray;
}
function MergeSort(arr, color) {
	const newColor = color.slice();
	const arrSteps = [];
	const colorSteps = [];
	const newArr = mergeSortHelper(arr.slice());
	console.log(newArr);
	return { arrSteps, colorSteps };
}
export default MergeSort;
