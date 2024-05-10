"use strict";
let car = "subaru";
let age = 25;
let numbers = [1, 2, 3, 4];
// "String Test"
// Test 1: Equality comparison (True)
console.log("Is car == 'Subaru'? I predict true.");
console.log(car == 'subaru'); // True (case-insensitive)
// Test 2: Strict Equality comparison (True)
console.log("Is car === 'Subaru'? I predict true.");
console.log(car == 'subaru'); // True (case-insensitive)
// Test 3: Inequality comparison (true)
console.log("Is car != 'Toyota? I predict true.");
console.log(car != 'Toyota'); // true
// Test 4: Inequality comparison (false)
console.log("Is car !== 'sabura? I predict false.");
console.log(car !== 'false'); // False (case-sensitive)
// "Lowercase function Tests"
// Test 5: Lowercase conversation (true)
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() === 'subaru'); // True (converted to Lowercase)
// Test 6: Lowercase conversation (false)
console.log("Is car === car.toLowerCase() === 'subaru'? I predict True.");
console.log(car === car.toLowerCase()); // False (original value remains uppercase)
// "Numerical Test"
// Test 7: Equality comparison (True)
console.log("Is age == '25'? I predict true.");
console.log(age == 25); // True
// Test 8: Inequality comparison (False)
console.log("Is age != '30? I predict true.");
console.log(age != 30); // False
// Test 9: Greater than comparison (False)
console.log("Is age > '30'? I predict true.");
console.log(age > 30); // False 
// Test 10: Less than and equal to comparison (True)
console.log("Is age <='30'? I predict true.");
console.log(age <= 30); // True
//  logical operators
// Test 11: AND (False)
console.log("Is age > '30'&& age < 30? I predict true.");
console.log(age > 20 && age < 30); // False (both conditions met
// Test 12: OR (False)
console.log("Is age > '30'|| age < 18? I predict false.");
console.log(age > 20 && age < 30); // False (neither condition met)
// Test 13 Array
console.log("Is 3 in numbers? I predict true.");
console.log(3 in numbers); // True (checks for index existence)
// Test 14 Not in Array (False)
console.log("Is 5 not in numbers? I predict true.");
console.log(5, not in numbers); // True (navigation of "in" operators)
