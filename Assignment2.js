/* Assignement 2 
write the diffrence between var,let,const with code.



/* 1.Var
The JavaScript variables statement is used to declare a variable and, optionally, we can initialize the value of that variable.

Example: var a =10;

Variable declarations are processed before the execution of the code.
The scope of a JavaScript variable declared with var is its current execution context.
The scope of a JavaScript variable declared outside the function is global.
Consider the following code snippet.*/

function nodeSimplified(){
    var a =10;
    console.log(a);  // output 10
    if(true){
     var a=20;
     console.log(a); // output 20
    }
    console.log(a);  // output 20
  }

  /* 2.Let
The let statement declares a local variable in a block scope. It is similar to var, in that we can optionally initialize the variable.

Example: let a =10;

The let statement allows you to create a variable with the scope limited to the block on which it is used.
It is similar to the variable we declare in other languages like Java, .NET, etc.
Consider the following code snippet. */

{
    let city;
    let name = "Sai Sir"; 
    name = "Viral Sir";
    console.log("Using Let: ", name);
 }
 console.log(name)

 /*3.const
 const statement values can be assigned once and they cannot be reassigned. The scope of const statement works similar to let statements.

Example: const a =10; */
unction nodeSimplified(){
    const MY_VARIABLE =10;
    console.log(MY_VARIABLE);  //output 10 
  }