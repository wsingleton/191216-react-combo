let arr = [1,4,2,8,5,7];
/*.map()

.filter()

.reduce()*/
let valsSquared = arr.map(val => Math.pow(val,2));
console.log(valsSquared);

let evens = arr.filter(val => val%2 ===0);
console.log(evens);
console.log(arr);

let sum = arr.reduce((a,b)=>a+b,0);
console.log(sum);