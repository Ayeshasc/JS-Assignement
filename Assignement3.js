/*

Using promises/async await/fetch get the random todos from the json placeholder api. And log all the completed todos to the console.  API Endpoint : ​https://jsonplaceholder.typicode.com/todos 

// */
// console.log("hello")
// async function fetchUsers(endpoint) {
//     const res = await fetch(endpoint);
//     let data = await res.json();
  
//     data = data.map(user => user.username);
  
//     console.log(data);
//   }
  
//   fetchUsers('https://jsonplaceholder.typicode.com/todos');


console.log('Fetch API');

// https://jsonplaceholder.typicode.com/todos

// Making a get request
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(data=>console.log(data))

let obj = {
    userId:254,
    title:"Some Title",
    body:'lorem ipsum',
}

// Make a post Request
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body: JSON.stringify(obj)
}).then(response=>response.json())
.then(data=>console.log(data))


// jokes api

async function fetchJokes(){
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();

    console.log(data);
}

fetchJokes();


let obj1 = {
    name:'Prasad',
    age:24,
    canDrive:true,
}

console.log(obj1);
let str = JSON.stringify(obj1);
console.log(str)

let strobj = JSON.parse(str);
console.log(strobj)