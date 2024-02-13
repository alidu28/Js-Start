function categorizeTemperature(temperature) {
  if (temperature < 0) {
    return "It is Freezing";
  } else if (temperature >= 0 && temperature <= 10) {
    return "It is Cold";
  } else if (temperature >= 11 && temperature <= 20) {
    return "It is Cool";
  } else if (temperature >= 21 && temperature <= 30) {
    return "It is Warm";
  } else if (temperature > 30) {
    return "It is Hot";
  } else {
    return "Hot";
  }
}

let usersTemperature = prompt("Enter your temperature in degree celcius: ");

let usersTemperatureValue = parseFloat(usersTemperature);
// temperature

if (!isNaN(usersTemperatureValue)) {
  let result = categorizeTemperature(usersTemperatureValue);
  console.log(result);
} else {
  console.log(`Invalid input. Please enter a number`);
}
 