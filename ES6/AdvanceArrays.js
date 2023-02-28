//Spreading
const A1 = [1,2,3,4,5,6]
const CloneA1 = [...A1] //[...[array]] will clone array

//Reduce
const B1 = [1,2,3,4,5]
const ReducedB1 = B1.reduce((a,b)=> a+b) //A is the total and B is the current value, will return 15
//loops from total(a) starting at zero and adds all values stating at index 0
//looks like this 0+1=1+2=3+3=6+4=10+5=15

// ReAssigning Variables
let a = 8, b = 6;
[a,b] = [b,a] //will set a = 6 and b = 8

const [e,f,,,g,h, ...arr] = [1,2,3,4,5,6,7,8,9] //will set letter to equal index value
//e = 1, f = 2, g = 5, h = 6, arr = [7,8,9]