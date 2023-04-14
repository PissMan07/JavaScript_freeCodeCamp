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

