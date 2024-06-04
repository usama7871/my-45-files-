// Define an array of usernames including "admin" and other users
const usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

// Iterate over each username in the usernames array
usernames.forEach(username => {
    // Check if the current username is "admin"
    if (username === "admin") {
        // Print a special message for the admin
        console.log("Hello admin, would you like to see a status report?");
    } else {
        // Print a generic message for all other users
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});

// Check if the usernames array is empty
if (usernames.length === 0) {
    // Print a message indicating no users are present
    console.log("We need to find some users!");
}
