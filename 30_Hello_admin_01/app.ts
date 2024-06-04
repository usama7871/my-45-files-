// Declare a constant array named `usernames` of type `string` and initialize it with the values "admin", "user1", "user2", "user3", and "user4".
const usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

// Loop through the `usernames` array and print a greeting to each user.
usernames.forEach(username => {
  if (username === "admin") {
    console.log(`Greetings, ${username}. The system is ready for your command. Would you like to review the status report?`);
  } else {
    console.log(`Welcome back, ${username}. Your presence is appreciated. May your session be productive and insightful.`);
  }
});
