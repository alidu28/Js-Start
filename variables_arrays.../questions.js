// ### Step 1

// Create an array of objects called `library`. Add 3 objects with a property of `title`, `author`, `status`. Title and author should be strings (whatever value you want) and the status should be another object with the properties of `own`, `reading` and `read`. Which should all be boolean values. For all status, set `own` to `true` and `reading` and `read` to false.

// ### Step 2

// You finished reading all of the books. Set the `read` value for all of them to `true`. Do not edit the initial object. Set the values using dot notation.

// ### Step 3

// Destructure the title from the first book and rename the variable to `firstBook`

const library = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },

  {
    title: "Think and Grow Rich",
    author: "Paulo Coelho",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },

  {
    title: "Make something wonderful",
    author: "Paulo Coelho",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const {title:firstbook} = library[0];

console.log(library[0])
