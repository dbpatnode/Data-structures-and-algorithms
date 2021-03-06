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

// OPTIMIZED SOLUTION - utilizing a hash map O(n)
function findSum(array, targetValue) {
    const hashmap = {};
    
    for (var i = 0; i < array.length; i++) {
        // this sets the current currentMapValue to the index at which the element is within the array.
        // on the initial pass since the the map is empty {} which in the if statement below will evaluate to undefined (a falsey value), which forces the else block

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

