//Convert Celcsius to Fahrenheit
function convertCtoF(celsius) {
    return celsius*9/5+32;
}
convertCtoF(30);


//Reverse String
function reverseString(str) {
    let a = ''
    for (let i = str.length-1;i>=0;i--){
      a += str[i]
    }
    return a

    /* METHOD 2
    return str
        .split("") //will split up string into array ['h','e','l','l','o']
        .reverse() //will reverse array ['o','l','l','e','h']
        .join(""); //will join string together [olleh]
     */
}

reverseString("hello");


// Recursion Factorials: 5! (shorthand notation) = 1 * 2 * 3 * 4 * 5 = 120
function factorialize(num) {
    if (num <= 1){ 
      return 1
    } else{
      return factorialize(num-1)*num
      // factorialize(5-1)*5
      // factorialize(4-1)*4*5
      // factorialize(3-1)3*4*5
      // factorialize(2-1)2*3*4*5
      // 1*2*3*4*5
    }
  }
console.log(factorialize(5));


//Find Longest word in string and return length
function findLongestWordLength(str) {
  const a = str.split(' '); //seperate words in string and place in array
  let x = a[0] //first word
  for (let i = 1; i<a.length;i++){ //find a bigger word, start at second word
    if (a[i].length >x.length){ //if this word bigger than current biggest word
      x = a[i] //change the current biggest word to this word
    }
  }
  return x.length
}
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));


// return Largest Number in array
function largestOfFour(arr) {
  const b = [] //max array
  for (let i in arr){ //get all children of arr
    b.push(Math.max(...arr[i])) //add max num to array
    //math.max return biggest num, to pass array you need to make a copy
  }
  return b
}


//Check for last letter(s) in string
function confirmEnding(str, target) {
  const r = new RegExp(target + '$','i') //use the var target and add '$' to the end to form the regex; finnally add the i for all styles on the outside
  return r.test(str)
  /*
  //Method 1: use slice to get the last letter(s) and check the letters
    return str.slice(str.length - target.length) === target;
  //Method 2: same as Method 1 but get legth by going in reverse order
    return str.slice(-target.length) === target
  */
}
confirmEnding("Bastian", "an");


//