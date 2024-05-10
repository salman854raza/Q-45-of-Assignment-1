"use strict";
let guest_list = ["Ali", "Farhan", "Raza", "Ayesha"];
// for(let i=0; i<guest_list.length; i++){
//     console.log("Respected Sir/Madam" + guest_list[i] + ",\nWe invited you on dinner tommorow.\n\nThank You")
// }
let not_guest = "Farhan";
let new_guest = "Salman";
guest_list[1] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam " + guest_list[i] + ",\nWe invited you on dinner tommorow.\n\nThank You");
}
guest_list.unshift(`shaheen`, `sarfraz`, `rizwan`);
for (let i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam " + guest_list[i] + ",\nWe invited you on dinner tommorow.\n\nThank You");
}
console.log(`Mr ${not_guest} will not coming tommorow dinner`);
