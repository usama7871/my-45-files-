// List of current usernames
const current_users: string[] = ["admin", "User1", "user2", "User3", "user4"];

// List of new usernames to be checked
const new_users: string[] = ["Admin", "user5", "User2", "user6", "user7"];

// Convert current usernames to lowercase for case-insensitive comparison
const lower_current_users = current_users.map(user => user.toLowerCase());

// Loop through each new username
new_users.forEach(newUser => {
    // Convert the new username to lowercase
    const lowerNewUser = newUser.toLowerCase();

    // Check if the lowercase version of the new username exists in the list of lowercase current usernames
    if (lower_current_users.includes(lowerNewUser)) {
        // If the username already exists, print a message to enter a new username
        console.log(`The username "${newUser}" is already taken. Please enter a new username.`);
    } else {
        // If the username is available, print a message saying it is available
        console.log(`The username "${newUser}" is available.`);
    }
});
