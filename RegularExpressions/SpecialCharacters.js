//Special Characters

//Wild Card: Period represents any value
const c1Regex = /.ello/ //'.' is a wild card meaning if 'ello' is in the word then it will recognize
const c2Regex = /./ //This will return anyything
c1Regex.test(a1) //will return true because 'ello' is present

// Dash: range creator
const f1Regex = /[a-z0-9]/gi; // Find all letters and all numberes

//Plus: combine instant repeaters (has to occur atleast once before returning)
const g1Regex = /l+/gi; // will combine the letters that appear in a row like this hello->['ll']

//Arrow Up: Exclude and find if at begining
const h1Regex = /[^aeiou]/gi; // Find everything except all vowels (INSIDE [])
const h2Regex = /^Hello/; //Hello must be the first word inorder for it to work

//Dollar sign: Find if at end
const k1Regex = /World$/ //will return if world is at the end

//AstricK: combine instant repeaters (can occur zero times before returning) [0-infinity]
const i1Regex = /el*/gi // '*' makes says return all duplicates or none if not present
const j1Regex = /.*/gi //will return entire text as one index value

//Question Mark: Stop at the next instance; or can function as the same as the astirck where it can appear zero or one time [0-1]
//Lazy match '*?'
const text = "<h1>Winter is coming</h1>";
const myRegex = /<.*?>/ig; // reads start at <, add everything, end at next>, //Lazy match

a1.match(i1Regex) //In hello world: it will return ell, because it must start with e and follow with l else it will only return e

//Cool Commands
const a = /\w/ig // \w = [A-Za-z0-9_]
const b = /\W/ig // \W = [^A-Za-z0-9_]
const c = /\d/ig // \d = [0-9]
const d = /\D/ig // \D = [0-9]
const e = /\s/g // \s = [ \r\t\f\n\v]


//Test
let userCheck = /^[a-z][a-z]+[0-9]*$|^[a-z][0-9][0-9]+$/i //This will follow these parameters
//Must be at least two charaters: if so can only be letters
//Numbers must only be located at the end of the location
//You do not need numbers
//No special chatacters