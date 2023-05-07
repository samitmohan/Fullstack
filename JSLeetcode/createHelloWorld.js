// Day 1

// ways of writing function
const createHelloWorld = function () {
    // return type : another function
    return function (...args) {
        return "Hello World";
    }(); // calling function here
}

// const f = createHelloWorld();
// console.log(f());
// f(); // Hello World
console.log(createHelloWorld())