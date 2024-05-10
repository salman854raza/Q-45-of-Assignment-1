"use strict";
// 39. City Names: Write a function called city_country() 
// that takes in the name of a city and its country. 
// The function should return a string formatted like this "Lahore, Pakistan"
// Call your function with at least three city-country pairs, 
// and print the valu that’s returned.
function cityCountry(city, country) {
    return `${city}, ${country}`;
}
let c1 = cityCountry('lahore', 'pakistan');
let c2 = cityCountry('Tokyo', 'Japan');
let c3 = cityCountry('Paris', 'France');
console.log(c1);
console.log(c2);
console.log(c3);
// def city_country(city, country):
//     return f"{city.title()}, {country.title()}"
// # Calling the function with three city-country pairs
// print(city_country("lahore", "pakistan"))
// print(city_country("paris", "france"))
// print(city_country("tokyo", "japan"))
