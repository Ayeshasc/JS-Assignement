/*
write a java script program that will iterate over an array of colors and cahnge the bacground color of after 5 second
*/


let colors = ['red','blue','yellow','pink','black'];


console.log(colors);
const list = document.querySelector('#list');
console.log(list);


colors.setAttribute('style','background-color:blue');
colors.classList.add('blue');

