function BubbleSort(arr, color) {
	const l = arr.length;
	const newArr = arr.slice();
	const newColor = color.slice();
	const arrSteps = [];
	const colorSteps = [];
	for (let i = 0; i < l - 1; i++) {
		for (let j = 0; j < l - i - 1; j++) {
			if (newArr[j] > newArr[j + 1]) {
				let temp = newArr[j];
				newArr[j] = newArr[j + 1];
				newArr[j + 1] = temp;
			}
			newColor[j] = 1;
			newColor[j + 1] = 1;
			arrSteps.push(newArr.slice());
			colorSteps.push(newColor.slice());
			newColor[j] = 0;
			newColor[j + 1] = 0;
		}
		newColor[newArr.length - 1 - i] = 2;
		arrSteps.push(newArr.slice());
		colorSteps.push(newColor.slice());
	}
	colorSteps[colorSteps.length - 1] = new Array(newArr.length).fill(2);
	// console.log(arrSteps);
	return { arrSteps, colorSteps };
}
export default BubbleSort;
