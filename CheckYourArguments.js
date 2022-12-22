/* Check your arguments
Instructions:
Bob has written a function to detect the type of an object. It receives any primitive values or objects,
and returns its object type as a string. But it seems to be working incorrectly. Can you figure out why,
and fix the code for him?

function objectType(obj = null) { //if no arguments are passed, defaults to null
    return Object.prototype.toString.call(obj);
}
*/
function objectType(obj) {
    if (arguments.length === 0) {
        return Object.prototype.toString.call(null)
    }
    return Object.prototype.toString.call(obj)
}

console.log(objectType({foo:'bar'})) // '[object Object]'
console.log(objectType([1,4,6,4,1])) // '[object Array]'
console.log(objectType(new Date(2012,11,21))) //'[object Date]'
console.log(objectType(new RegExp(/^_^/g))) // '[object RegExp]
