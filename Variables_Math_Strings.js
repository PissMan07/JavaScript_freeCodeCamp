//This is a comment

/*
    this is a 
    multi-line 
    comment
*/

//Variables
var a;
sus = 1;

var b = "sussy";
var c = "baka";
var d = b+c //will equal "sussybaka"

//Let Variables: let variables cannot have duplicate names, best practice to use instead of var
var e = 1;
var e = 2;

let f = 1;

// Const Variables: used for constant variables (unchangable variables), best practice to have it be all uppercase
const G = "hi";
//G = "Bye" //will cause error

//Special Math
let h = 20;
h++; //will result in 21 (adds one)
h--; //will result in 20 (subs one)

let remainder = 5%3; // will return 2 because when 5 is divided by 3 the will be two left over

//Strings
const DQyotes = "This \"baka\" is kind of a sussy \"baka\"."; // will return: "This "baka" is kind of a sussy "baka"."
const SQuotes = 'This "baka" is kind of a sussy "baka".'; //ideal string method 'This "baka" is kind of a sussy "baka".'
const Concat = 'I come first. ' + 'I come second.'; // will return 'I come first. I come second.'

const MyName = "Ethan";
const Len = MyName.length; //with return number of characters taken (includes spaces) which is 5
const FirstLetter = MyName[0]; //everything starts with zero, and you get get index of strings
const LastLetter = MyName[Len-1]; //length does not include zero so you need to subtract 1
//CANNOT CHANGE INDIVIDUAL LETTERS WITH BRACKET NOTATION
