let arr = [1, 4, 3, 8, 5, 7];

/*
    .map()

    .filter()

    .reduce()
*/


//simple of example of .map()
let valsSquared = arr.map(val => Math.pow(val, 2));
console.log(valsSquared);// {}
console.log(arr);


// simple example of .filter()
let evens = intArry(val => val % 2 ===0);
console.log(evens);// [4, 2, 8]
console.log(arr)//

// simple example of .reduce()
let sum = arr.reduce((a, b)=> a + b, 0);

