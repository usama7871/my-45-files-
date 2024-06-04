// Declare a variable named `personName` of type `string` and initialize it with the value "Usama Abdullah".
const personName: string = "Usama Abdullah";

// Convert the `personName` string to lowercase and print it to the console.
console.log(personName.toLowerCase());

// Convert the `personName` string to uppercase and print it to the console.
console.log(personName.toUpperCase());

// Extract the first character of the `personName` string, convert it to uppercase, and concatenate it with the rest of the string converted to lowercase. Print the result to the console.
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
