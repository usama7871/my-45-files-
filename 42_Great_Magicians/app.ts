// Function to show magicians
function show_magicians(magicians: string[]): void {
    // Loop through the array and print the name of each magician
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Function to modify magician names by adding "the Great"
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

// Array of magician's names
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call the make_great function to modify the magician names
make_great(magicians);

// Call the show_magicians function to see the modified list
show_magicians(magicians);
