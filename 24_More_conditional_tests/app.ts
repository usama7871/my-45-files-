// Declare a variable named `color` of type `string` and initialize it with the value "Green".
let color: string = "Green";

// Perform a series of conditional tests and print the results to the console.
console.log("Is color == 'Green'? I predict True.");
console.log(color == "Green"); // Output: True

console.log("Is color == 'green'? I predict False.");
console.log(color == "green"); // Output: False

console.log("Is color.toLowerCase() == 'green'? I predict True.");
console.log(color.toLowerCase() == "green"); // Output: True

// Declare a variable named `num` of type `number` and initialize it with the value 5.
let num: number = 5;

console.log("Is num != 7? I predict True.");
console.log(num != 7); // Output: True

console.log("Is num > 3? I predict True.");
console.log(num > 3); // Output: True

console.log("Is num < 10? I predict True.");
console.log(num < 10); // Output: True

console.log("Is num >= 5? I predict True.");
console.log(num >= 5); // Output: True

console.log("Is num <= 5? I predict True.");
console.log(num <= 5); // Output: True

// Declare a variable named `isWeekend` of type `boolean` and initialize it with the value `false`.
let isWeekend: boolean = false;

// Declare a variable named `hasHoliday` of type `boolean` and initialize it with the value `true`.
let hasHoliday: boolean = true;

console.log("Is it not a weekend and there's a holiday? I predict True.");
console.log(!isWeekend && hasHoliday); // Output: True

// Declare a variable named `fruits` of type `string[]` and initialize it with the values "apple", "banana", and "orange".
let fruits: string[] = ["apple", "banana", "orange"];

console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes("banana")); // Output: True

console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes("grape")); // Output: True
