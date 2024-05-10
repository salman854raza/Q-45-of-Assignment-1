// Test 1: Equality comparison (True)
let cars: string = "subaru"
console.log("Is cars == 'subaru'? I predict true.");
console.log(cars == 'subaru'); // True
// Test 2: Strict Equality comparison (True)
console.log("Is cars === 'subaru'? I predict true.");
console.log(cars === 'subaru'); // True
// Test 3: Inequality comparison (False)
console.log("Is cars != 'subaru'? I predict true.");
console.log(cars != 'subaru'); // False
// Test 4: Strict Inequality comparison (False)
console.log("Is cars !== 'subaru'? I predict true.");
console.log(cars !== 'subaru'); // False
// Test 5: Less than comparison (False)
console.log("Is cars <'subaru'? I predict true.");
console.log(cars < 'subaru'); // False (1exicographic comparison)
// Test 6: Greater than comparison (False)
console.log("Is cars > 'subaru'? I predict true.");
console.log(cars > 'subaru'); // False (1exicographic comparison)
// Test 7: Less than and equal to comparison (True)
console.log("Is cars <='subaru'? I predict true.");
console.log(cars <= 'subaru'); // True (1exicographic comparison)
// Test 8: Greater than and equal to comparison (True)
console.log("Is cars >='subaru'? I predict true.");
console.log(cars >= 'subaru'); // True (1exicographic comparison)
// Test 9: Checking Truthness (True)
console.log("Is cars? 'subaru'? I predict true.");
console.log(cars); // True (non-empty string is truthy)
// Test 10: Checking Falsiness (False)
console.log("Is cars? 'subaru'? I predict False.");
console.log(cars); // False (negation of a truthy value)