// Define the function make_shirt with default parameters
function make_shirt(size: string = "L", message: string = "I love TypeScript"): void {
    // Print a sentence summarizing the size of the shirt and the message printed on it
    console.log(`The shirt size is ${size} and it has the message: "${message}" printed on it.`);
}

// Call the function to create shirts with default parameters
make_shirt(); // Large shirt with default message
make_shirt("M"); // Medium shirt with default message

// Call the function to create a shirt with a custom message and size
make_shirt("S", "Hello, world!"); // Small shirt with custom message
