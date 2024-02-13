// 1. Write a function called greet that takes a person's name as a parameter and returns a greeting message, such as "Hello, [name]!".

// 2. Create a function called sumArray that takes an array of numbers as a parameter and prints the sum of all the numbers in the array.

// 3. Create a function named calculateRectangleArea that takes the length and width of a rectangle as parameters and prints the area of the rectangle.

// 4. Create a function called calculatePower that takes a base and an exponent as parameters and prints the result of raising the base to the given exponent.

// Soln 1
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Spider");

// Soln 2

// function sumArray([a, b, c, d]) {
//   console.log(a + b + c + d);
// }

// sumArray([4, 6, 8, 2]);

function sumArray(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log("The sum of the array is:" + sum);
}

let my_array_number = [9, 8, 8, 5, 6, 1, 5, 5, 3];

sumArray(my_array_number);

// Soln 3

function calculateRectangleArea(l, w) {
  console.log(l * w);
}

calculateRectangleArea(8, 4);

// Soln 4

function calculatePower(b, e) {
  console.log(Math.pow(b, e));
}

calculatePower(4, 2);

console.clear()

// Quiz

// Question 1
// Create a function called getCelsius() that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.

function getCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

console.log(getCelsius(50));

// Question 2
// Create an arrow function called minMax() that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.


// Question 3
// Create an IIFE (Immediately Invoked Function Expression) that takes in the length and width of a rectangle outputs it to the console in a message as soon as the page loads.
