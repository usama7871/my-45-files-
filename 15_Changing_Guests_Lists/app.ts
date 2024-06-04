// Define an array of guests
const guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

// Remove the last guest from the list
const guestUnableToMakeIt: string = guests.pop()!;

// Print a message indicating that the guest can't make it
console.log(`${guestUnableToMakeIt} can't make it to dinner.`);

// Add a new guest to the list
guests.push("Nikola Tesla");

// Loop through the array and print invitations to each guest
guests.forEach(guest => console.log(`Dear ${guest}, you are invited to dinner.`));
