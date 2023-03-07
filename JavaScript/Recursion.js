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
//looks something like this
//sum(arr, 0) + sum(arr, 1) + sum(arr, 2) + 0

//Advance Recursion
console.log('ADVANCE RECURSION COUNTDOWN')
function countdown(n) {
  if (n < 1) { 
    return [];
  } else {//if n is greater than or equal to one proceede
    const arr = countdown(n - 1); //recursion
    arr.unshift(n); //make table
    return arr;
  }
}
console.log(countdown(5))
//looks something like this
//unshift 5, unshift 4, unshift 3, unshift 2, unshift 1, unshift []
//inserting will work from left to right looking like
//[].unshift(1).unshift(2).unshift(3).unshift.(2).unshift(1)
//[5,4,3,2,1]

function countUp(n) {
  if (n < 1) { 
    return [];
  } else {//if n is greater than or equal to one proceede
    const arr = countUp(n - 1); //recursion
    arr.push(n); //make table
    return arr;
  }
}
console.log(countUp(5))

function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum){
    return [];
  }else{
    const arr = rangeOfNumbers(startNum+1,endNum);
    arr.unshift(startNum);
    return arr;
  }
};

console.log(rangeOfNumbers(1,4))