//Regular function Verision
function func(a,b,c){
  return "Hello World"
}
//Arrrow Finction Version
const ArrFunc = (a,b,c) => 'Hello World'

// Arrow Function
const A = (a,b) => a+b
A(10,10) // will return 20

//Varying Parameters
const B = (...args) => args.reduce((a, b) => a + b, 0) //...args allows for varying number of parameters by putting them all into one array
