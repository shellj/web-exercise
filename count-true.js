/**
 * Create a function which returns the number of true values there are in an array.
 * 
 * @param {array} arr 
 */
function countTrue(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr.filter(a => a ? 1 : 0)
        .reduce((a, b) => a + b)
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([]));