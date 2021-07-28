// CONTAINER WITH MOST WATER
    // you are given an array of positive integers where each integer represents the height of a vertical line on a chart
    // find two lines which together with the x-axis  forms a  container that would hold the greatest amount of water.
    // return the area of water it would hold on

// QUESTIONS:
    //  does the thickness of the lines matter?
    // do the left and right sides count as walls?
    // will a higher line within the container affect the area within the container?



    lineValues0 = [10, 1, 1, 1, 9]

    lineValues1 = []

    lineValues2 = [1, 2, 3, 4, 5, 6]

    lineValues3 = [10, 50, 100, 15]

    lineValues4 = [5, 5, 5, 5]

    lineValues6 = [6, 9, 3, 4, 5, 8]

    // shifting pointers technique.
        
    // area = L x W
        // L will be equal to the lines.length
        // and width will be equal to the shorter of the two values
        // in an array like so: [1, 10, 1, 9] we'd need to calculate the min width: min(a, b) where a is the 10 value and b is the 9
        // then multiply it by the length which is calculated by getting the length subtracting the index of the right most value(10) from the index of the left most value(9).
        // the resulting formula would look like this:
        // min(a, b) x (indexOf(b) - indexOf(a))
        // we'll need to calculate this for every pair because we need to find the largest possible outcome

    const getMaxWaterContainer = function (heights) {

    let i = 0
    let j = heights.length - 1 
    let maxArea = 0;

    while(i < j) {
    // finds the shorter of the two line heights 
    const height = Math.min(heights[i], heights[j]);
    // finds the width 
    const width = j - i;
    const area = height * width;
    // replaces maxArea with area if area is bigger then maxArea 
    maxArea = Math.max(maxArea, area);
    
    // since we only care about the smaller of the two lines(since that will be the max height of the container), whatever one is larger of the two points will be moved inward one. 
    if (heights[i] <= heights[j]) {
        i++;
    } else {
        j--;
    }
}

return maxArea;
    }

    console.log(containerWithMostWater(lineValues2))
