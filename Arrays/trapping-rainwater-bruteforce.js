// given an array of integers representing an elevation map where the width of each bar is 1
// return how much rain water can be trapped.

// QUESTIONS:
    // do the left and right sides of the graph count as walls?
    // will there be negative integers?

// TEST CASES:
    const heights1 = [1, 0, 1]
    const heights2 = []
    const heights3 = [0, 1, 0, 0, 3, 5, 2, 0, 1]
    const heights4 = [1]
    const heights5 = [3, 4, 3]

const findAmountRainWater = function(heights) {
    let totalWater = 0
    for(let p = 0; p < heights.length; p++){
        let leftP = p
        let rightP = p
        let maxLeft = 0
        let maxRight = 0

        while (leftP >= 0) {
            maxLeft = Math.max(maxLeft, heights[leftP])
            leftP--;
        }
        while (rightP < heights.length) {
            maxRight = Math.max(maxRight, heights[rightP])
            rightP++;
        }

        const currentWater = Math.min(maxLeft, maxRight) - heights[p]
        if(currentWater >= 0) {
            totalWater += currentWater
        }
    }
    return totalWater
}

console.log(findAmountRainWater(heights1))