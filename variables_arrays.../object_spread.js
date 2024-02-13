// const todo = {}; old one

const todo = new Object();
todo.id = 2;
todo.my_title = "pay for hair";
todo.completed = false;

const todo2 = new Object();

// nesting objects

const person = {
  address: {
    coords: {
      lat: 88.43,
      lon: -76.9,
    },
  },
};

// console.log(person.address.coords);
console.log("Longitude: " + person.address.coords.lon);
console.log("Latitude: " + person.address.coords.lat);

// console.log(todo);

// using the spred operator
const monday = {
  morning: "breakfast in bed",
  // afternoon: "fast",
  // evening: "mirage",
  late_night: "netflix and chill",
};

const tuesday = {
  morning: "church to pray",
  afternoon: "work",
  night: "see my in-laws",
};

// monday.hobby = "played basketball";
// console.log(monday);

let last = tuesday.night;
// console.log(tuesday.night);

monday.night = last;
console.log(monday);

const for_the_week = { ...monday, ...tuesday };
console.log(for_the_week);

// creating an array of objects
// const for_the_week_new = [monday, tuesday];
// console.log(for_the_week_new);

// Object.entries(for_the_week);

// console.log(for_the_week_new[1].morning);
