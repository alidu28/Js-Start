let a = "You did a great job"; //90 to 100
// class_score >= 90 && class_score <= 100

let b = "You can do better"; // 70 - 89
// class_score >= 70 && class_score <= 89

let c = "You should try harder"; // 55 - 69
// class_score >= 55 && class_score <= 69

let d = "What is this"; // 40 -54
// class_score >= 40 && class_score <= 54

let e = "We don't do that here"; // > 40
// class_score >= 0 && class_score <= 40

let class_score = 40;

if (class_score >= 90 && class_score <= 100) {
  console.log(a);
} else if (class_score >= 70 && class_score <= 89) {
  console.log(b);
} else if (class_score >= 55 && class_score <= 69) {
  console.log(c);
} else if (class_score >= 40 && class_score <= 54) {
  console.log(d);
} else if (class_score >= 0 && class_score <= 40) {
  console.log(e);
} else {
  console.log("Please enter a number between 0 and 100");
}

console.clear();
//  range <, >, =, ==, <=, >=, &&, ||, =/, !

// You are building a program to categorize temperatures into different ranges. Write a javascript program that takes a temperature as an input and outputs a message based on the foolowing criteria:

// You are building a program to categorize temperatures into different ranges. Write a JavaScript program that takes a temperature as input and outputs a message based on the following criteria:
// If the temperature is less than 0 degrees Celsius, output: "Freezing!"
// If the temperature is between 0 and 10 degrees Celsius (inclusive), output: "Cold."
// If the temperature is between 11 and 20 degrees Celsius (inclusive), output: "Cool."
// If the temperature is between 21 and 30 degrees Celsius (inclusive), output: "Warm."
// If the temperature is greater than 30 degrees Celsius, output: "Hot!"
// Write the JavaScript code to accomplish this task, taking user input for the temperature.


let freeze = "Freezing";

let cold = "Cold";

let cool = "Cool";

let warm = "Warm";

let hot = "Hot";

let temperature = 30;

if (temperature < 0) {
  console.log(freeze);
} else if (temperature >= 0 && temperature <= 10) {
  console.log(cold);
} else if (temperature >= 11 && temperature <= 20) {
  console.log(cool);
} else if (temperature >= 21 && temperature <= 30) {
  console.log(warm);
} else if (temperature > 30) {
  console.log(hot);
}
