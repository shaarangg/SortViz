function merge(newArr, left, mid, right, newColor, arrSteps, colorSteps) {
	const n1 = mid - left + 1;
	const n2 = right - mid;
	const L = new Array(n1);
	const R = new Array(n2);
	for (let i = 0; i < n1; i++) {
		L[i] = newArr[left + i];
		newColor[left + i] = 1;
		colorSteps.push(newColor.slice());
		arrSteps.push(newArr.slice());
	}
	for (let i = 0; i < n2; i++) {
		R[i] = newArr[mid + i + 1];
		newColor[mid + i + 1] = 1;
		colorSteps.push(newColor.slice());
		arrSteps.push(newArr.slice());
	}
	let i = 0,
		j = 0,
		k = left;
	while (i < n1 && j < n2) {
		if (L[i] < R[j]) {
			newArr[k] = L[i];
			i++;
		} else {
			newArr[k] = R[j];
			j++;
		}
		newColor[k] = 2;
		colorSteps.push(newColor.slice());
		arrSteps.push(newArr.slice());
		newColor[k] = 0;
		colorSteps.push(newColor.slice());
		arrSteps.push(newArr.slice());
		k++;
	}
	while (i < n1) {
		newArr[k] = L[i];
		newColor[k] = 2;
		colorSteps.push(newColor.slice());
		arrSteps.push(newArr.slice());
		newColor[k] = 0;
		colorSteps.push(newColor.slice());
		arrSteps.push(newArr.slice());
		i++;
		k++;
	}
	while (j < n2) {
		newArr[k] = R[j];
		newColor[k] = 2;
		colorSteps.push(newColor.slice());
		arrSteps.push(newArr.slice());
		newColor[k] = 0;
		colorSteps.push(newColor.slice());
		arrSteps.push(newArr.slice());
		j++;
		k++;
	}
}
function mergeSortHelper(newArr, left, right, newColor, arrSteps, colorSteps) {
	if (left >= right) return;
	const mid = Math.floor((left + right) / 2);
	mergeSortHelper(newArr, left, mid, newColor, arrSteps, colorSteps);
	mergeSortHelper(newArr, mid + 1, right, newColor, arrSteps, colorSteps);
	merge(newArr, left, mid, right, newColor, arrSteps, colorSteps);
}
function MergeSort(arr, color) {
	const newColor = color.slice();
	const newArr = arr.slice();
	const arrSteps = [];
	const colorSteps = [];
	mergeSortHelper(newArr, 0, newArr.length - 1, newColor, arrSteps, colorSteps);
	colorSteps[colorSteps.length - 1] = new Array(newArr.length).fill(3);
	// console.log(newArr);
	return { arrSteps, colorSteps };
}
export default MergeSort;
