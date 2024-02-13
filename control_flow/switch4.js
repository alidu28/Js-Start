// Use switch control flow for:

// You are building a program to categorize temperatures into different ranges. Write a JavaScript program that takes a temperature as input and outputs a message based on the following criteria:
// If the temperature is less than 0 degrees Celsius, output: "Freezing!"
// If the temperature is between 0 and 10 degrees Celsius (inclusive), output: "Cold."
// If the temperature is between 11 and 20 degrees Celsius (inclusive), output: "Cool."
// If the temperature is between 21 and 30 degrees Celsius (inclusive), output: "Warm."
// If the temperature is greater than 30 degrees Celsius, output: "Hot!"
// Write the JavaScript code to accomplish this task, taking user input for the temperature.

let userTemperature = prompt("Enter your temperature in degree celcius");
let temperature;

switch (true) {
  case userTemperature < 0:
    temperature = "Freezing";
    break;

  case userTemperature >= 0 && userTemperature <= 10:
    temperature = "Cold";
    break;

  case userTemperature >= 11 && userTemperature <= 20:
    temperature = "Cool";
    break;

  case userTemperature >= 21 && userTemperature <= 30:
    temperature = "Warm";
    break;

  case userTemperature > 30:
    temperature = "Hot";
    break;

  default:
    temperature = "Invalid temperature entered";
    break;
}

console.log("The temperature is " + temperature);

console.clear();

// Use function control flow for:

// You are building a program to categorize temperatures into different ranges. Write a JavaScript program that takes a temperature as input and outputs a message based on the following criteria:
// If the temperature is less than 0 degrees Celsius, output: "Freezing!"
// If the temperature is between 0 and 10 degrees Celsius (inclusive), output: "Cold."
// If the temperature is between 11 and 20 degrees Celsius (inclusive), output: "Cool."
// If the temperature is between 21 and 30 degrees Celsius (inclusive), output: "Warm."
// If the temperature is greater than 30 degrees Celsius, output: "Hot!"
// Write the JavaScript code to accomplish this task, taking user input for the temperature.

function groupOfTemperatures(temperature) {
  if (temperature < 0) {
    return "It is Freezing";
  } else if (temperature >= 0 && temperature <= 10) {
    return "It is Cold";
  } else if (temperature >= 11 && temperature <= 20) {
    return "It is Cool";
  } else if (temperature >= 21 && temperature <= 30) {
    return "It is Warm";
  } else {
    return "Hot";
  }
}

let personTemperature = prompt(
  "Enter your temperature for more info on health: "
);

let personTemperatureValue = parseFloat(personTemperature);

if (!isNaN(personTemperatureValue)){
  let input = groupOfTemperatures(personTemperatureValue)
  console.log(input);
}
else{
  console.log("Invalid input. Please input a number ");
}