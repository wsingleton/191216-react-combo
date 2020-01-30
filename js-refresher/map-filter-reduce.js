let arr = [1, 4, 2, 8, 5, 7];

/*
    . map()
        Creates a new array where each value from the original array is mapped to a new value, 
        which is produced by a provided callback function. This callback takes one param which
        represents the current value being processed.

    .filter()
        Creates a new array where each value meets some condition, as defined by a provided
        callback function. This callback takes one param which represents the current value 
        being processed.

    .reduce()
        Reduces all of the values within the original array down into a single value, the
        calculation of this single value being defined by a provided callback. This callback
        takes two parameters: an accumulator value, and the current value being processed. 
        Additionally, the .reduce() method takes an optional second parameter to define an
        initial value for the accumulator used in the callback.
*/

// simple example of .map()
let valsSquared = arr.map(val => Math.pow(val, 2));
console.log(valsSquared); // [1, 16, 4, 64, 25, 49]
console.log(arr); // should be the same as line 1

// simple example of .filter()
let evens = arr.filter(val => val % 2 === 0);
console.log(evens); // [4, 2, 8]
console.log(arr); // should be the same as line 1

// simple example of .reduce()
let sum = arr.reduce((a, b) => a + b, 0);
console.log(sum); // 27
console.log(arr); // should be the same as line 1