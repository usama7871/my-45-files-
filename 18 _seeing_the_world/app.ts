// Define an array of places to visit
const placesToVisit: string[] = ["Paris", "Tokyo", "Rio de Janeiro", "Sydney", "Rome"];

// Print the original order of the array
console.log("Original order:");
console.log(placesToVisit.join(", "));

// Print the array in alphabetical order without modifying the original array
console.log("Alphabetical order:");
console.log(placesToVisit.slice().sort().join(", "));

// Print the original order of the array again
console.log("Original order again:");
console.log(placesToVisit.join(", "));

// Print the array in reverse alphabetical order without modifying the original array
console.log("Reverse alphabetical order:");
console.log(placesToVisit.slice().sort().reverse().join(", "));

// Print the original order of the array again
console.log("Original order again:");
console.log(placesToVisit.join(", "));

// Reverse the order of the array and print it
console.log("Reversed order:");
placesToVisit.reverse();
console.log(placesToVisit.join(", "));

// Reverse the order of the array again and print it
console.log("Back to original order:");
placesToVisit.reverse();
console.log(placesToVisit.join(", "));

// Sort the array in alphabetical order and print it
console.log("Sorted alphabetically:");
placesToVisit.sort();
console.log(placesToVisit.join(", "));

// Sort the array in reverse alphabetical order and print it
console.log("Sorted in reverse alphabetical order:");
placesToVisit.sort().reverse();
console.log(placesToVisit.join(", "));
