// Function to show magicians
function show_magicians(magicians: string[]): void {
    // Loop through the array and print the name of each magician
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Function to modify magician names by adding "the Great" and return a new array
function make_great(magicians: string[]): string[] {
    // Create a copy of the original array
    const modifiedMagicians: string[] = [...magicians];

    // Modify each magician's name in the copied array
    for (let i = 0; i < modifiedMagicians.length; i++) {
        modifiedMagicians[i] = "the Great " + modifiedMagicians[i];
    }

    // Return the modified array
    return modifiedMagicians;
}

// Array of magician's names
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call the make_great function with a copy of the original array to modify the magician names
const modifiedMagicians: string[] = make_great([...magicians]);

// Display the original array
console.log("Original Magicians:");
show_magicians(magicians);

// Display the modified array
console.log("\nModified Magicians:");
show_magicians(modifiedMagicians);
        