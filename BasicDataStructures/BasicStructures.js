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


//Find 
function checkInventory(scannedItem) {
  // Only change code below this line
  return foods[scannedItem]
  // Only change code above this line
}
console.log(checkInventory("apples"));


//Check If name is in object; 'Alan','Jeff','Sarah', and 'Ryan'
function isEveryoneHere(userObj) { //ALL elements in every must match in order for it pass true
  return ['Alan','Jeff','Sarah','Ryan'].every((name) => //[array].every will loop through every element and apply function
    userObj.hasOwnProperty(name)
  );
  /*&& Method: requires that all elements must meet condition in order to pass true

    return userObj.hasOwnProperty("Alan") &&
      userObj.hasOwnProperty("Jeff") &&
      userObj.hasOwnProperty("Sarah") &&
      userObj.hasOwnProperty("Ryan");

  */
}


// For In
function countOnline(usersObj) { //will return number of people online
  let n = 0
  for (let user in usersObj){ //like x will be every element in userobj starting at index zero.
    if (usersObj[user]['online'] == true){ //you must call object then person then property
      n++ //add one to n
    }
  }
  return n
}


