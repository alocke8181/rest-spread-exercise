// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...nums) => nums.filter(val => val % 2 ===0);

const findMin = (...args) => Math.min(...args);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (argArray, ...extra) => [...argArray, ...extra.map(value => value * 2)];

const removeRandom = (items) => {
    let randIndx = Math.floor(Math.random() * items.length);
    return [...items.slice(0,randIndx),...items.slice(randIndx+1)];
}

const extend = (array1, array2) => [...array1,...array2];

const addKeyVal = (obj, key, val) => ({...obj, [key]: val});

const removeKey = (obj, key) => {
    let returnObj = {...obj};
    delete returnObj[key];
    return returnObj;
}

const combine = (obj1, obj2) => ({...obj1, ...obj2});

const update = (obj, key, value) => ({...obj, [key]: value});
