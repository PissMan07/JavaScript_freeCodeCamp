//Recursion
function sum(arr, n) {
  // Only change code below this line
  if (n <= 0){
    return 0;
  } else {
    //Will first recall the function
    //will then add and send over the current element
    //Will loop until n <= 0
    return sum(arr,n-1)+arr[n-1]
  }
  // Only change code above this line
}

console.log(sum([2,3,4],0))
console.log(sum([2,3,4],1))
console.log(sum([2,3,4],3))