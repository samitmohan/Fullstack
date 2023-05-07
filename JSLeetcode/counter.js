// Day 2
const createCounter = function (n) {
    return function () {
        // n = hidden state (only called once but we can't access it) : like private variables in OOPS.
        // hidden states = closures.
        return n++; // return 10 and then increment it.
    };
}

const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12