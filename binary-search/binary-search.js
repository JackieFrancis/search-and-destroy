'use strict';

// Complete this algo
// const binarySearch = (array, target) => {
// 	if(array.length === 1){
// 		return array[0] === target ? true : false
// 	}
// 	const left = array.slice(0, Math.floor(array.length / 2))
// 	const right = array.slice(Math.floor(array.length / 2))
// 	if(target === left[left.length - 1] || target === right[0]) {
// 		return true
// 	}

// 	if(target < left[left.length - 1]) {
// 		return binarySearch(left, target)
// 	}
// 	else {
// 		return binarySearch(right, target)
// 	}

// 	//recursive base case: array.length === 1
// };

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

const binarySearch = (array, target) => {
	const pointer = Math.floor(array.length / 2)
	
	if(target < array[pointer]) {
		for(let i = pointer; i >= 0; i--) {
			if(array[i] === target) {
				return true
			}
		}
	}
	else {
		for(let i = pointer; i <= array.length - 1; i++) {
			if(array[i] === target) {
				return true
			}
		}
	}
	return false

};

module.exports = binarySearch