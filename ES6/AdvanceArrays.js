//Spreading
const A1 = [1,2,3,4,5,6]
const CloneA1 = [...A1] //[...[array]] will clone array

//Reduce
const B1 = [1,2,3,4,5]
const ReducedB1 = B1.reduce((a,b)=> a+b) //A is the total and B is the current value, will return 15
//loops from total(a) starting at zero and adds all values stating at index 0
//looks like this 0+1=1+2=3+3=6+4=10+5=15