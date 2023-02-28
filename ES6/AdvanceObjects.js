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
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max,min}) =>(max + min) / 2.0; //passes on max and min from obj

//returning objects from arrow functions
const SHORTgetMousePosition = (x, y) => ({ x, y }); //will return parameters x and y as an object

//this is the long version
const LONGgetMousePosition = (x, y) => ({ x: x, y: y });

//Functions in objects
const bicycle = {
  gear: 2,
  setGear(newGear) { //function,
    this.gear = newGear; //this will get the outside scope, think of it as getting the parent of the function
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);
