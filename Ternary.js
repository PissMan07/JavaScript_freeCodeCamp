//Ternary: simplified if statement for true or false
function greater(a,b){
    return a>b? 'a is greater':'b is greater or equal'
}
greater(10,5) //return option 1
greater(5, 10) //return option 2

//Multi-Layered ternary
function greaterADV(a,b){
    return a===b? 'a and b equal':
    a>b? 'a is greater' : 'a is greater'
}

greaterADV(5,5) //return option 1
greaterADV(10,5) //return option 2
greaterADV(5, 10) //return option 3
