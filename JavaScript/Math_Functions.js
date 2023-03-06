//Random
const randomNum = Math.random(); //Will return a random number between [0 ,1) will not include 1

//Floor
const floorNum = Math.floor(5135.4685); //will only return whole numbers(5135)

//Random + Floor Combo
const range = Math.floor((Math.random()*10)); //will return random num between [0,9]
//floor makes the number only whole numbers
//Math.random()*10 will return a number bewteen [0,1) multiplied by 10
const min1 = 30
const max1 = 40
const range1 = Math.floor(Math.random()*(max1-min1+1))+min1 //will return num between [30,40]
//(max1-min1+1) will set the inital max number (10), you need to add 1 because it math. random does not include inputed value
//then by adding min1 at the end will set the minimum value (30)
//making the final range [30,40]

//ParseInt: convert string to number
const convertNum = parseInt("45454") //converts '45454' to 45454
const convertNumBinary = parseInt("100",2) //will convert to base 2 which is binary which mean it will equal 4

