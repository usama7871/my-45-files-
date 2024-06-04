// Declare a constant array named `favorite_fruits` of type `string` and initialize it with the values "apple", "banana", and "orange".
const favorite_fruits: string[] = ["apple", "banana", "orange"];

// Check if "banana" is in the `favorite_fruits` array and print a message if it is.
if (favorite_fruits.includes("banana")) {
  console.log("You really like bananas!");
}

// Check if "apple" is in the `favorite_fruits` array and print a message if it is.
if (favorite_fruits.includes("apple")) {
  console.log("You really like apples!");
}

// Check if "orange" is in the `favorite_fruits` array and print a message if it is.
if (favorite_fruits.includes("orange")) {
  console.log("You really like oranges!");
}

// Check if "grape" is in the `favorite_fruits` array and print a message if it is. If it is not, print a different message.
if (favorite_fruits.includes("grape")) {
  console.log("You really like grapes!");
} else {
  console.log("Grapes are not one of your favorite fruits.");
}

// Check if "kiwi" is in the `favorite_fruits` array and print a message if it is. If it is not, print a different message.
if (favorite_fruits.includes("kiwi")) {
  console.log("You really like kiwis!");
} else {
  console.log("Kiwis are not one of your favorite fruits.");
}
