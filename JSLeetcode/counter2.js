// Day 3
// https://leetcode.com/problems/counter-ii/
var createCounter = function (init) {
    let count = init;

    function increment() {
        return ++count;
    }

    function decrement() {
        return --count;
    }

    function reset() {
        count = init;
        return count;
    }

    return {
        increment: increment, decrement: decrement, reset: reset
    }
};