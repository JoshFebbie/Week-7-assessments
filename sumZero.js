//With two nested "for-loops", this function should run in Quadratic Time.
//wich would be O(n^2)

function addToZero(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
      
        if (i !== j && arr[i] + arr[j] === 0) {
          return true;
        } 
      }
    }
    return false
  }
  console.log(addToZero([-5, 4, 5, 2, 0, -15]))
  console.log(addToZero([9, -6, 1, -2, 0, 20]))
  console.log(addToZero([0, 21, 33, 6, 0, -9]))
  console.log(addToZero([9, 2, 1, -2, 4, 20]))