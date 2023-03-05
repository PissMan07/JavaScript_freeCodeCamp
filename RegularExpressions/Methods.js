//Regular Expressions or 'regex'/'regexp' are patterens used to match, search and replace Text
    //Usually used to use special characters
    //Will return in list form

//Test Method
const a1 = 'Hello World! HeLlO Ethan';

const a1Regex = /Hello/;
const a2Regex = /dog|cat|rat/; //the '|' symbolizes or
const a3Regex = /HeLlO/i; //by adding 'i' at the end you can ignore all case differences

const a1Result = a1Regex.test(a1); //will return true if /Hello/ is found

//Match; get values
const b1Regex = /Hello/
const b2Regex = /Hello/ig //you can have multiple filters on one regex (g is the include repeats filter)

a1.match(b1Regex) //will return the regex if present, ['Hello']
a1.match(b2Regex) //will return the regex if present, ['Hello, HeLlO']

//Matching Singles with multiple possibilities
const d1Regex = /[aeiou]/gi; // Find all vowels (single characters)
const e1Regex = /he/gi; // will return all words that begin with 'he'
const result = a1.match(d1Regex); // return vowels [e,o,o,e,o,e,a]

const bigStr = "big";
const bagStr = "bag";
const bugStr = "bug";
const bogStr = "bog";
const bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); //returns big
bagStr.match(bgRegex); //returns bag
bugStr.match(bgRegex); //returns bug
bogStr.match(bgRegex); //returns undfined

//Basicaly An If Statement
let ohStr = "Ohhh no";
let oh1Regex = /oh{3,6} no/i; // if h repeats at min 3 and max 6 times then return entire statement
let oh2Regex = /oh{3} no/i; // if h repeats at min 3 return entire statement

//Lookahead: check for item, but will not include in match
let posRegex = /(?=...)/ // include
let negRegex = /(?!...)/ // exclude
let pwRegex = /(?=\w{6})(?=\w*\d{2})/ //First checks if it is 6chars long, and then checks if there are two numbers together with anything before it

//checking for mixed grouping: use parenthseses to be more specific
let myString1 = "Eleanor Roosevelt";
let myString2 = "Franklin Roosevelt";
let myString3 = "Franklin D. Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
//((Franklin|Eleanor) check if first name is Franklin or Eleanor
//(([A-Z]\.?|[A-Z][a-z]+) )>Roosevelt? ?: makes it optioonal; [A-Z]: allows First initial and \.? allows for '.'; [A-Z][a-z]+ allows for full middle name; space outside () makes sure it is seperate from last
//Roosevelt Makes checks for Roosevelt and allows it to not be present
