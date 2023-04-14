//Sum of All Numbers in A Range
//For Loop
function sumAll1(arr) {
  let x = 0
  for (let n = Math.min(...arr);n<=Math.max(...arr);n++){
    x += n
  }
  return x
};

//recursion
function sumAll2(arr) {
  const [first, last] = [...arr].sort((a, b) => a - b); //make a sorted constant variable of arr ([first,last] = [1,4])
  return first !== last? // if first does not equal
    first + sumAll2([first + 1, last]) //if true, add first to function(first++,last)
    : first; //if false return first
    /*
    1 + sumAll2([1+1,4])
    1 + 2 + sumAll2([2+1,4])
    1 + 2 + 3 + sumAll2([3+1,4])
    1 + 2 + 3 + 4 (4 is first after adding)
    return 10
    */
}
sumAll1([1, 4]); //will return 10


//Differences in two arrays
//Double For Loop Solution
function diffArray(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr1.length;i++){
    if (arr2.indexOf(arr1[i])<0){
      newArr.push(arr1[i])
    }
  }
  for (let i = 0; i < arr2.length;i++){
    if (arr1.indexOf(arr2[i])<0){
      newArr.push(arr2[i])
    }
  }
  return newArr;
}
//Declarative Solution
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}


