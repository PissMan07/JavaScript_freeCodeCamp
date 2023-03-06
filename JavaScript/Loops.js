//While
let a1 = 5;
const a2 = [];
//Desending Order
while (a1 >= 0){ //will loop untill a1 > 0
    a2.push(a1);
    a2--;
}

//For Loop: (VARIABLE_;_WHEN_TO_STOP_;_INCRIMENT)
let b1 = 5;
const b2 = [];
//asending Order
for (i = 0; i <= 5; i++){ //start at zero;run while i<=5;change i++
    b2.push(i);
}
//getting from array
let c1 = 0
const c2 = [1,5,6,7,2,3];

for (let i =0;i<c2.length;i++){
    c1 += c2[i];
} //will add up all values

//Do While (DIFFERENCE IS THAT THIS WILL CHECK FOR CONDITOIN AT END OF LOOP)
let d1 = 0;
const d2 = [];

do { //will always run once then check
    a2.push(a1);
    a2--;
} while (a1>=1);