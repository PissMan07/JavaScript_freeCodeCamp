//Functional Programing: What Is It?
//  Functional Programing is a style Solutions are simple isolated functions that do not affect the outerscope
//  Isolated Functions do not affect anything outside the function
//  Pure Functions are functions where the same input will give the same output

//CallBacks
//  functions that are slipped or passed into another function
const prepareGreenTea = () => 'greenTea'; //callback function
const prepareBlackTea = () => 'blackTea'; //callback function
const getTea = (prepareTea, numOfCups) => { //main function
  const teaCups = [];
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

//It is best to avoid mutations and external dependence to make debugging easier
  // The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
  //Func1
function add(x1, bookName) { //add parameters to avoid external dependence
  const x = [...x1] //make new variable to avoid mutations in external sources
  x.push(bookName);
  return x; //return without changing anything
}
  //Func2
function remove(x1, bookName) {//add parameters to avoid external dependence
  const x = [...x1]//make new variable to avoid mutations in external sources
  const book_index = x.indexOf(bookName);
  if (book_index >= 0) {
    x.splice(book_index, 1);
    return x;//return without changing anything
    }
}
  //Actions
add(bookList, 'A Brief History of Time');
remove(bookList, 'On The Electrodynamics of Moving Bodies');
remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

//Custom Map Function
Array.prototype.myMap = function(callback) { //own function for all arrays
  const newArray = []; //create new array
  for (let i = 0; i < this.length;i++){ //for loop, use this to get array
    newArray.push(callback(this[i], i, this)) //push values of array into new array with callback function
    //three paremeters represents, value, index, and array
  };
  return newArray; //return array
};

[1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0]) //self made map function

//Concat > Push: in some cases
//Concat will not merge without changing the original arr