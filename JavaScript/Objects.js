//Objects: basically a dictionary
const family = {
    Ethan: 17,
    "Nathan": true,
    12: "miley",
    Parents: ["Calvin", 'Hien'],
    'random string': 'cool'
};

//calling object values
const myAge = family.Ethan;
const isNathanCool = family.Nathan; //if the property is a string put it in normally
const randomStr = family['random string']
const check = family.hasOwnProperty('cuzzo') //will return false because cuzzo is not a property
//You can also check for a property by getting the path in an if statement
// if (family['cuzzo']){ }; will have the same result as check variable

//Editing Objects
family['random string'] = 'not cool' //will change value
family.loser = 'miley' //will create a new index and value
delete family.loser // will delete index and value