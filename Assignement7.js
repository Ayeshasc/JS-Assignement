/* 
7.Assignement
write the code which outputs prime numbers in the internal from 2 to n
*/

console.log("prime no in the interval from 2 to n");

//let n = 10;
let n = prompt("enter no");
 console.log(n);




nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}

