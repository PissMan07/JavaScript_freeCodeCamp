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
C.unshift(1); //will push parameter to front of array (aka 1)

//splice( index , how_many_values_to_delete , values_to_insert...)
C.splice(3,0,4); //will add 4 to the third index
C.splice(0,1) //will remove index zero

//slice(start index,end index+1): extracts/copies, end index is not inclusive
C.slice(0,3) //will return [1,2,3]
//C will equal [1,2,3] at the end of everything

//Map(callback): Map will not change original array 
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);// Expected output: Array [2, 8, 18, 32]
 
//Reformating OBJS with MAP
//Method 1
const ratings = watchList.map((x)=>({
    title: x["Title"],
    rating: x["imdbRating"]
  })
)
//Method 2
const ratings1 = watchList.map(({ Title: title, imdbRating: rating }) => ({title, rating}));
//get rating and title from watchlist obj through variable, then make function
//... copy everything into array
const C1 = [...C] //will equal [1,2,3]
const C2 = [...C,4,5,6] //will equal [1,2,3,4,5,6]

//Filter(callback): if fuction is true then include
const filteredList = ratings1.filter((x)=>(x['rating']>=8)) 

//Index Of
const D =[1,2,3,4,5,6]
D.indexOf(5) // will return the index of value 5 (4)

function quickCheck(arr, elem) { //will check if element is in list
    return arr.indexOf(elem) >= 0? true:false //return true if found and false if not, indexes cant be negative
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//reverse
const reverseD = [...D].reverse() //will reverse array [6,5,4,3,2,1]

//Join
const joinReverseD = [...reverseD].join() //will join all elements [654321]

//Sort
const s1 = ['b', 'd', 'a', 'c']
const s2 = [5, 3, 20, 3]

s1.sort() //will sort by asending alphebetical order
s2.sort((a,b)=>a-b)
//If solution is positive then it will go first a
//If solution is 0 then it will remain
//If solution is negative then it will go first b
//Sort will run through every combination