/*  Assignement 2 JS Day 2  Name: Ayesha Sattar Choudhary
2.Explain with example the methods of string and Array
*/

/* methods of array
1.Converting Arrays to Strings
The JavaScript method toString() converts an array to a string of (comma separated) array values. */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

/* 2.Shifting Elements
Shifting is equivalent to popping, working on the first element instead of the last.

The shift() method removes the first array element and "shifts" all other elements to a lower index.*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.shift();    // the value of x is "Banana"

/* 3.Unshifting Elements
The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits


/* 4. Deleting Elements
Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];           // Changes the first element in fruits to undefined


/*5. Merging (Concatenating) Arrays
The concat() method creates a new array by merging (concatenating) existing arrays:*/
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys); 

/* 6.Automatic toString()
JavaScript automatically converts an array to a comma separated string when a primitive value is expected.

This is always the case when you try to output an array.

These two examples will produce the same result: */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
