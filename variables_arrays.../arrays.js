let my_array = [9, 7, 200, 45];
let string_array = ["Spider", "The Goat", "Sheep", "Ghost"];
let mixed_array = [4, "String", false, null, [3, 6, 7], undefined];

console.log(mixed_array);
console.log(mixed_array.length);

let second_array = my_array[1];
console.log(second_array);

console.log(
  "My array at index zero is " +
    my_array[0] +
    " My array at index one is " +
    my_array[1] +
    " My array at index two is " +
    my_array[2] +
    " And my array at index three is " +
    my_array[3]
);

// add to an array
my_array.push(10);
console.log(my_array.length);
console.log(my_array);

// add to string array
string_array.push("Cow");
console.log(string_array);

// to remove an element of an array
my_array.pop();
my_array.pop();
my_array.pop();
console.log(my_array);

// remove at a particular index
// string_array.splice(2, 1);
// console.log(string_array);

string_array.splice(3, 2);
console.log(string_array);
