import BubbleSort from "./Sorting-Algorithms/BubbleSort";
import MergeSort from "./Sorting-Algorithms/MergeSort";
import QuickSort from "./Sorting-Algorithms/QuickSort";
import SelectionSort from "./Sorting-Algorithms/SelectionSort";

const Algorithms = {
	BubbleSort: BubbleSort,
	MergeSort: MergeSort,
	QuickSort: QuickSort,
	SelectionSort: SelectionSort,
};

function swap(arr, first, second) {
	const temp = arr[first];
	arr[first] = arr[second];
	arr[second] = temp;
}
function generateRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

export { swap, generateRandomNumber, Algorithms };
