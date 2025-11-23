let arr = [12, 5, 8, 20, 3];

console.log("Array:", arr);

let largest = Math.max(...arr);
let smallest = Math.min(...arr);

console.log("Largest:", largest);
console.log("Smallest:", smallest);

let ascending = [...arr].sort((a, b) => a - b);
let descending = [...arr].sort((a, b) => b - a);

console.log("Ascending:", ascending);
console.log("Descending:", descending);
