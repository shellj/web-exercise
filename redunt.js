/**
 * Write a function redundant that takes in a string str and returns a function that returns str.
 *
 * @param {string} str
 */
function redundant(str) {
    return function () {
        return str;
    }
}

const f1 = redundant("abc")
console.log(f1());

