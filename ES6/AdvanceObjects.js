//Freeze
const A1 = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(A1); //WIll prevenet anything from changin the function

//Advance ways to edit Objects
const B1 ={
  yesterday: 75,
  today: 77,
  tomorrow: 80
}

//calling
const {yesterday, today, tomorrow} = B1 //this will make variables for said values in obj
console.log(yesterday) //will return 75

const {yesterday : a, today: b, tomorrow:c} = B1 //You can change the name of the variable through [objectAssignment : variableName]
console.log(a) //will return 75

//Calling Objects inside of Objects
const C1 = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const {yesterday:{low:yl,high:yh}} = C1

//Passing destructuring through functions as parameters
