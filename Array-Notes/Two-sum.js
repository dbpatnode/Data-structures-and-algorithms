// given an array of integers, return the indices of the two numbers that add up to a given target

// POTENTIAL QUESTIONS:
    // 1) are all the numbers positive? or can there be negative numbers?-- if working with integers
    // 2) are there duplicate numbers in the array?
    // 3) will there always be a solution available?
    // 4) what do we return if there is no solution available?
    // can there be multiple pairs that add up to the target value?

// write out some test cases:

array1 = [1, 2, 3, 4]
target1 = 7

array2 = [1, 2, 3, 4]
target2 = 

array3 = []
target3 = 15

array4 = [1, 1, 1, 1, 2, 3, 4, 5]
target4 = 2

array5 = [2]
target5 = 15

// BRUTEFORCE SOLUTION O(n^2)

// function findSum(array, targetValue) {
//     for (var i = 0; i < array.length; i++) {
//         // this finds the number that we need as our second value
//         const targetToFind = targetValue - array[i]
//         for (var j = i + 1; j < array.length; j++) {
//             // we're checking here if the targetToFind (calculated from the subtracting the targetValue inital indexs value )
//             if(targetToFind === array[j]) {
//                 return [i, j]
//             }
//         }
//     } 
//     return null // if no solution
// } 

// OPTIMIZED SOLUTION - utilizing a hash map

function findSum(array, targetValue) {
    const hashmap = {};
    
    for (var i = 0; i < array.length; i++) {
        const currentMapValue = hashmap[array[i]];
        if (currentMapValue >= 0) {
            return [currentMapValue, i]
        } else {
            const numberToFind = targetValue - array[i]
            hashmap[numberToFind] = i
        }
    }
    return null
}


console.log(findSum(array5, target5))
