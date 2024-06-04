// Function to format city and country into a string
function city_country(city: string, country: string): string {
    // Return the formatted string
    return `${city}, ${country}`;
}

// Call the city_country function with three city-country pairs
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Sydney", "Australia"));
console.log(city_country("Paris", "France"));
