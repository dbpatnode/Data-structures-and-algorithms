
// log all matching pairs in an array
// this is O(n^2) note that we're using two for loops with different values (i and j) hence n^2

const boxes = [3, 5, 10, 34, 6]
const letters = ['a', 'b', 'c', 'd', 'e', 'f']

function matchingPairs(array) {
    // first for loop grabs value of the 1st element(i) of the array.
      for (let i=0; i < array.length; i++) {
        // we loop again to grab the next element (j) and console log the two
          for (let j=i+1; j < array.length; j++) {
            console.log(`${array[i]}  ${array[j]}`)
        }
      }
  }
  
  matchingPairs(letters);