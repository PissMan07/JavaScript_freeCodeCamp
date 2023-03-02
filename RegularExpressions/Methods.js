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

//Wild Card
const c1Regex = /.ello/ //'.' is a wild card meaning if 'ello' is in the word then it will recognize
c1Regex.test(a1) //will return true because 'ello' is present

//Matching Singles with multiple possibilities
let d1Regex = /[aeiou]/gi; // Find all vowels (single characters)
let e1Regex = /[a-z0-9]/gi; // Find all letters and all numberes
let f1Regex = /l+/gi; // will combine the letters that appear in a row like this hello->['ll']
let g1Regex = /he/gi; // will return all words that begin with 'he'
let result = a1.match(d1Regex); // return vowels [e,o,o,e,o,e,a]

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); //returns big
bagStr.match(bgRegex); //returns bag
bugStr.match(bgRegex); //returns bug
bogStr.match(bgRegex); //returns undfined