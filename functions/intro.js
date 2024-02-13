function greetings() {
  console.log("give your heart to me and not the black stars");
}

greetings();

function addNumbers(a, b) {
  console.log(a + b);
}

addNumbers(10, 70);

// use a string as my parameter
function rizz(name) {
  // console.log(`give your heart to me and not the ${name}`);
  console.log("give your heart to me and not the " + name);
}

rizz("Leo");

function sub(a, b) {
  return a - b;
}

console.log(sub(6, 1));
console.clear();

// function check_register(user) {
//   return user + " has registered";
// }

// console.log(check_register("Spider"));

function check_register(user) {
  if (!user) {
    user = "Bot";
  }
  return user + " has registered";
}

console.log(check_register());

function enter_a_number(number) {
  if (!number) {
    number = 0;
  }

  return number + " is the number entered by the user";
}

console.log(enter_a_number());

console.clear();

const car = {
  color: "red",
  engine: "V12",
};

function my_cars(car) {
  return (
    "My car's color is " +
    car.color +
    " and" +
    " it has a " +
    car.engine +
    " engine"
  );
}

console.log(my_cars(car));

const person = {
  name: "Mohammed",
  age: "18",
};

function the_person(which_person) {
  return (
    "He's name is " +
    which_person.name +
    " and he's " +
    which_person.age +
    " years old"
  );
}

console.log(the_person(person));
