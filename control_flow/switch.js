let userDay = parseInt(prompt("Enter the day of the week as a number: "));
let dayName;

switch (userDay) {
  case 1:
    dayName = "Monday";
    break;

  case 2:
    dayName = "Tuesday";
    break;

  case 3:
    dayName = "Wednesday";
    break;

  case 4:
    dayName = "Thursday";
    break;

  case 5:
    dayName = "Friday";
    break;

  default:
    dayName: "You entered an invalid number as day";
    break;
}

console.log("The day is " + dayName);
