function flattenArary(arrToFlatten) {

var mergedArr = [] //Local array to keeps track of merge.

/**
* THis function is recursively called for each element
* the array that is an Array.
**/
function flatten(arr) {
    if (arr.length > 0) {
      for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          flatten(arr[i])
        } else {
          mergedArr.push(arr[i])
        }
      }
    }
    return mergedArr
}

return flatten(arrToFlatten)
}

console.log(flattenArary([[1,2,[3]],4]))
