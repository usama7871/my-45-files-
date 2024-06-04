// Declare a constant array named `names` of type `string` and initialize it with the values "John", "Alice", and "Bob".
const names: string[] = ["John", "Alice", "Bob"];

// Declare a constant variable named `message` of type `string` and initialize it with the value "Hello, nice to meet you".
const message: string = "Hello, nice to meet you";

// Use the `forEach()` method on the `names` array to iterate over each element in the array.
// For each element, print a greeting message that includes the `message` and the current element's name.
names.forEach(name => console.log(`${message}, ${name}!`));
