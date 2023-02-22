//Array: Basically a list/table
const Array = ["Joe", 1, true];
const Matrix = [["Houses",2],["Cars",4]];
const Array1 = Array[0]; //Will return "joe"
const Matrix1 = Matrix[0][0];//Will return "Houses"

//You can change values of arrays/Matrices regardless of variable type
const A = [1,2,3];
A[0] = 4; //will replace 1 with 4
const B = [[1,2,3],[4,5,6][7,8,9]];
B[0][2] = 10; //Will replace 3 with 10

//Array functions
const C = [1,2,3];
C.push([4,"Gays"]); //will add parameter at end of the array (aka [4, "gays"])
C.pop(); // will remove last item of array (aka [4, "gays"])
C.shift(); // will remove first item of array (aka 1)
C.unshift(1); //will parameter to front of array (aka 1)
//C will equal [1,2,3] at the end of everything
const D = [4,5,6];

