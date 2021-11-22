function BubbleSort(arr) {
	const l = arr.length;
	const newArr = arr.slice();
	const arrSteps = [];
	for (let i = 0; i < l - 1; i++) {
		for (let j = 0; j < l - i - 1; j++) {
			if (newArr[j] > newArr[j + 1]) {
				let temp = newArr[j];
				newArr[j] = newArr[j + 1];
				newArr[j + 1] = temp;
			}
			arrSteps.push(newArr.slice());
		}
	}
	// console.log(arrSteps);
	return arrSteps;
}
export default BubbleSort;
