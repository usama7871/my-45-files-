// Define an array of guests
const guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

// Print a message indicating that a bigger dinner table was found
console.log("Good news! We found a bigger dinner table.");

// Add a new guest to the beginning of the array
guests.unshift("Isaac Newton");

// Add a new guest to the middle of the array
guests.splice(Math.floor(guests.length / 2), 0, "Galileo Galilei");

// Add a new guest to the end of the array
guests.push("Stephen Hawking");

// Loop through the array and print invitations to each guest
guests.forEach(guest => console.log(`Dear ${guest}, you are invited to dinner.`));
