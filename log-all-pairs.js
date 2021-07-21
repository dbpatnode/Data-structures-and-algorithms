
// log all matching pairs in an array
let boxes = [3, 5, 10, 34, 6]

function matchingPairs(array) {
      for (let i=0; i < boxes.length; i++) {
          for (let j=1; j < boxes.length; j++) {
            console.log(`${array[i]}  ${array[j]}`)
        }
      }
  }
  
  matchingPairs(boxes);