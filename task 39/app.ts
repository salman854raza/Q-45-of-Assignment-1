// 39. City Names: Write a function called city_country() 
// that takes in the name of a city and its country. 
// The function should return a string formatted like this "Lahore, Pakistan"
// Call your function with at least three city-country pairs, 
// and print the valu that’s returned.
function cityCountry(city:string, country:string): string {
return`${city}, ${country}`
}
let c1 = cityCountry('lahore','pakistan')
let c2 = cityCountry('Tokyo','Japan')
let c3 = cityCountry('Paris','France')
console.log(c1)
console.log(c2)
console.log(c3)



















