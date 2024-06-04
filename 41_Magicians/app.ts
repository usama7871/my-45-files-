// Function to show magicians
function show_magicians(magicians: string[]): void {
    // Loop through the array and print the name of each magician
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Array of magician's names
const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call the show_magicians function with the array of magician's names
show_magicians(magicians);
