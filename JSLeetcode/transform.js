// Day 4

var map = function (array, fn) {
	return array.map(fn);
};

// Better way
var map = function (array, fn) {
	const ans = [];
	for (const [i, element] of array.entries()) {
		ans.push(fn[element], i);
	}

	return ans;
};

// Another way
var map = function (array, fn) {
    const newArray = [];
    for (const [i, element] of array.entries()) {
        newArray[i] = fn(element, i);
    }
    return newArray;
};
