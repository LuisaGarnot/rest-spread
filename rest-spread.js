//ES2015 Function that takes a variable number of arguments
/* Write an ES2015 Version */

const filterOutOdds = (...args) => args.filter(v => v % 2 === 0);

//findMin - Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
//Make sure to do this using the rest and spread operator.

const findMin = (...args) => Math.min(...args);

//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys
// and values of the first object and second object.
//mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
//The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(val => val *2)]

//Slice and Dice!

// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

// Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];

}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
let newObj = {...obj};
newObj[key] = val;
return newObj;

}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj = {...obj}
    delete newObj[key];
    return newObj
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
let newObj = {...obj1, ...obj2};
return newObj;
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
let newObj = {...obj};
new[key] = val;
return newObj
}