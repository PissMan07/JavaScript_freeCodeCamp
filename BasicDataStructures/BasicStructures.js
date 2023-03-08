//Filter function
function filteredArray(arr, elem) { //make new array that excludes said element in nested arrays
    let newArr = []; //new array
    for (let i =0;i<arr.length;i++){ //loop through given array
      if (arr[i].indexOf(elem) < 0){ //if element is not found in array procede
        newArr.push(arr[i]) //push
      }
    }
    return newArr; //return
  }
  
  console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)); //will return [[10,8,3],[14,6,23]]