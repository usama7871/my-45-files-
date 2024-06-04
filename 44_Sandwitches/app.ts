// Function to summarize a sandwich order
function make_sandwich(...items: string[]): void {
    // Print a summary of the sandwich order
    console.log("Sandwich Summary:");
    console.log("Bread");
    items.forEach(item => {
        console.log(item);
    });
    console.log("Bread");
    console.log("Enjoy your sandwich!\n");
}

// Call the function three times with different number of arguments
make_sandwich("Cheese", "Tomato", "Lettuce");
make_sandwich("Ham", "Mustard");
make_sandwich("Turkey");
