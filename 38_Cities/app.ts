// Function to describe a city and its country
function describe_city(city: string, country: string = "Pakistan"): void {
    // Print a sentence describing the city and country
    console.log(`${city} is in ${country}.`);
}

// Call the describe_city function for three different cities
describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");
