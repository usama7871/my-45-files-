// Function to store information about a car in an object
function car_info(manufacturer: string, model: string, ...options: string[]) {
   // Create an object to store car information
    const car: { [key: string]: string } = {
        "manufacturer": manufacturer,
        "model": model
    };
    // Add additional key-value pairs to the car object
    options.forEach(option => {
        const [key, value] = option.split(':');
        car[key.trim()] = value.trim();
    });
    // Return the car object
    return car;
}
// Print the object returned by the function
console.log(car_info("Toyota", "Corolla", "color: red", "sunroof: yes"));
