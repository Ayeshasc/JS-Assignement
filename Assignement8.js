/*
8.Asignement 
Replace function expression with arrow functions in the code below
*/


function ask(question, yes, no){
    if(confirm(question))yes()
    else no();
}
ask(
    "do yo agree?",
    function() {alert("you agreed.");},
    function() {alert("you canceled the execution.");},
);




//Arrow Functions

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.")
//   );