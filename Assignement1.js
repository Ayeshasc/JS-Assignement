/*
/*
Write a program which does the following things: 
1. Takes a positive number from the user. 
2. Makes an array of numbers till the number given by user 
3. Use higher order function to filter the odd numbers 
4. Generate and array of the cubes of the filtered numbers 

 */

console.log("Higher Order Functions");
let arr = [1,2,3,4,5,6]

let even = arr.filter(el=>el%2==0);

let evenSquares = arr.filter(el=>el%2==0).map(el=>el**2);

console.log(even);
console.log(evenSquares);