//Constructor Function: creating an object with a function
function Dog(){
    this.name = 'Joe';
    this.color = 'Blue';
    this.numLegs = 4;
}

//Obj version
const Dog = {
    name: 'Joe',
    color: 'Blue',
    numLegs: 4
}

//adding new values to constructers
let gender = new Dog() //this will give gender the properties of the function
//format: let [var] = new [constructorFunction]

// Parameters to constructers
function Dog(name,color) {
    this.name = name
    this.color = color
  }
let terrier = new Dog("bunny","black")

//Checking if new constrcuter was made from constructer function INSTANCE OF
function House(numBedrooms) { //constructor func
    this.numBedrooms = numBedrooms;
}
let myHouse = new House(3) //new constructor
myHouse instanceof House; //check if new constructer is made from base constructor function
//format: [constructor] instanceof [constructorFunction]

//Placing props of objs into arr
function Bird(name) { //base constructor function
    this.name = name;
    this.numLegs = 2;
  }

let canary = new Bird("Tweety"); //new constructor
let ownProps = []; //array
for (let x in canary) { //get all properties from obj
    if (canary.hasOwnProperty(property)) { //if property is present ([obj].hasOwnProperty([val]) will return true if value is present in obj)
      ownProps.push(property); //will push property name into array
    }
}

//Prototypes and getting properties: universal property for all obj's created by constructer
function Dogs(name) { //constructor func
  this.name = name;
}

Dog.prototype.numLegs = 4; //prototype prop, basically is a universal property for constructor func that does not show in obj

let beagle = new Dog("Snoopy"); //new constructor

let ownsProps = []; //arr for props
let prototypesProps = []; //arr for proto

for (let x in beagle){ //get all props including prototypes
  if (beagle.hasOwnProperty(x)){ //if prop is found inside obj then
    ownProps.push(x) //add to arr for props
  } else if (!beagle.hasOwnProperty(x)){ //else if property is not present
    prototypesProps.push(x) //add to arr for prototypes
  }
}

//Constructor Property: [constructor].constructor === [ConstructorFunction]
function Dog(name) { //Base Constructor
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) { //check if parameter is made from constructor func
  return candidate.constructor === Dog //constructor will return true of false
}

//Adding Multiple Prototypes
Dog.prototype = {
  constructor: Dog, //Will allow you to use [property].constructor === Dog
  numLegs: 2, //prototype number
  eat(){ //Prototype Function
    console.log('hi')
  },
  describe(){
    console.log('Joe')
  }
};

//Where do Prototypes come From
function Dog(name) {
  this.name = name;
}
let beagles = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle) //basically instace of but for prototype

//Object.Prototype: The biggest prototype in the chain
//All prototypes are apart of this
function Animal() { }

Animal.prototype = { //parenet prototype, all prototypes will have these prots
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

//Using the paren prototypes
let duck = Object.create(Animal.prototype); // this is how you use
let beaglesss = Object.create(Animal.prototype); // Change this line

duck.eat(); //will return "nom nom nom"

//Changing Prototypes 
duck.constructor = Bird; //changes constructor property to coorect 
beaglesss.constructor = Dog;

//Adding to extra prototypes
Dog.prototype = Object.create(Animal.prototype) //repeating code
Dog.prototype.constructor = Dog; //set constructor
Dog.prototype.bark = function() {console.log('Woof!')} //create new function for prototype

//Overiding inherited items: Turn Animal prototype eat to say num num num for dig
Dog.prototype.eat = function(){ //will only override for dog prototype
  console.log('num num num')
}

//Mixin instead of inheritance: best to use with two unrelated objs that preform a similar function
let bird = { //obj1
  name: "Donald",
  numLegs: 2
};

let boat = { //obj2
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj){ //this is a function that takes an obj
  obj.glide = function(){ //creat new obj child called glide that is a functions
    return 'WHOOSH' //returns whoosh
  }
}
glideMixin(bird) //insert glide function
glideMixin(boat) //insert glide function
