let guest_list : string [] = ["Ali","Farhan","Raza","Ayesha"];
for(let i=0; i<guest_list.length; i++){
    console.log("Respected Sir/Madam" + guest_list[i] + ",\nWe invited you on dinner tommorow.\n\nThank You")
}
let not_guest : string = "Farhan";
let new_guest : string = "Salman";
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log("Respected Sir/Madam " + guest_list[i] + ",\nWe invited you on dinner tommorow.\n\nThank You")
}
console.log(`Mr ${not_guest} will not coming tommorow dinner`) 