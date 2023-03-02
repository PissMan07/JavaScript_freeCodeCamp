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
