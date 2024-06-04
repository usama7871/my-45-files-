// Define an array of guests
const guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"];

// Print a message indicating that the new dinner table won't arrive in time
console.log("Unfortunately, the new dinner table won't arrive in time.");

// Print a message indicating that only two guests can be invited
console.log("I can invite only two people for dinner.");

// Loop through the array and remove guests until only two remain
while (guests.length > 2) {
  const removedGuest: string = guests.pop()!;
  console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

// Print a message to each of the remaining guests
guests.forEach(guest => console.log(`Dear ${guest}, you are still invited to dinner.`));

// Remove the remaining guests from the list
guests.length = 0;

// Print the empty guest list
console.log("The guest list is empty.");
