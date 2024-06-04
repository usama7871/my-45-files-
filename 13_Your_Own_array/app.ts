// Define an array to store examples of my favorite modes of transportation
let favoriteTransportations: string[] = ["Honda motorcycle", "Tesla Model S", "Boeing 747", "Yamaha YZF-R1", "BMW X5"];

// Function to print a series of statements about the items in the array
function printFavoriteTransportations(transports: string[]): void {
  // Loop through each item in the transport array
  for (let transport of transports) {
    // Print a statement about each item
    console.log(`I would like to own a ${transport}.`);
  }
}

// Call the function to print the statements
printFavoriteTransportations(favoriteTransportations);
