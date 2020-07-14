/* Assignement 3
write a brief intro on available data types in JS*/

// Data types in JS//
/* 1.JavaScript Strings
A string (or a text string) is a series of characters like "John Doe".

Strings are written with quotes. You can use single or double quotes */
var carName1 = "Volvo XC60";   // Using double quotes
var carName2 = 'Volvo XC60';   // Using single quotes

/* 2.JavaScript Numbers
JavaScript has only one type of numbers.

Numbers can be written with, or without decimals: */
var x1 = 34.00;     // Written with decimals
var x2 = 34;        // Written without decimals

Extra large or extra small numbers can be written with scientific (exponential) notation:
var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123

/* 3.JavaScript Booleans
Booleans can only have two values: true or false.*/
var x = 5;
var y = 5;
var z = 6;
(x == y)       // Returns true
(x == z)       // Returns false

/* 4.JavaScript Arrays
JavaScript arrays are written with square brackets.

Array items are separated by commas.
The following code declares (creates) an array called cars, containing three items (car names): */
var cars = ["Saab", "Volvo", "BMW"];

/*Array indexes are zero-based, which means the first item is [0], second is [1], and so on */

/* 5.JavaScript Objects
JavaScript objects are written with curly braces {}.

Object properties are written as name:value pairs, separated by commas.*/

//Example
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

/* 6.The typeof Operator
You can use the JavaScript typeof operator to find the type of a JavaScript variable.

The typeof operator returns the type of a variable or an expression:*/
// Example
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"

// Example
typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"


