// Functions: reusable code needed to be called
function a(){ //This is a function
    console.log("Hello World"); //This is Print
}
a() //This will call function

//Arguements and Parameters
function b(a,b,c){ //parameters
    console.log(a+b+c); //can do math in function
}
b(1,2,3); // arguements 

//Return
function c(a,b){ 
    return a + b; //return gives an output for function when it normally does not have one
}
c(10,2); // will return 20

//Global Scope and Functions
const A = 1; //Global Variable
const B = 2; //Global Variable
function d(){
    C = 1; //this will create new global
    let A = 3; //Local Variables only avaiable in function (can share same name as global)
    return (A + B + C); //you can preform actions while returning value
}
d(); //will return 3+2+1 or 6