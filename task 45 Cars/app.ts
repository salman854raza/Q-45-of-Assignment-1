// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
// interface Car {
//     manufacturer: string;
//     model: string;
//     [key: string]: any; // Allow any other properties
// }

// function createCar(manufacturer: string, model: string, ...options: Car[]): Car {
//     const car: Car = { manufacturer, model };

//     // Assign additional properties from options
//     for (const option of options) {
//         for (const key in option) {
//             if (option.hasOwnProperty(key)) {
//                 car[key] = option[key];
//             }
//         }
//     }

//     return car;
// }

// // Create a car object with required information and additional properties
// const myCar = createCar("Toyota", "Corolla", {color: "red" }, { year: 2023 });

// // Print the car object to verify the information
// console.log(myCar);


















