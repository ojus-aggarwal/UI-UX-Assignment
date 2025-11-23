let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

let multiplied = evenNumbers.map(num => num * 2); 
console.log("After multiplying by 2:", multiplied);

let sum = multiplied.reduce((acc, num) => acc + num, 0);
console.log("Sum of resulting numbers:", sum);
