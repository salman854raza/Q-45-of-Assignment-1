let guest_list: string[] = ["Ali", "Farhan", "Raza", "Ayesha"];
//     console.log("Respected Sir/Madam" + guest_list[i] + ",\nWe invited you on dinner tommorow.\n\nThank You")
// }for(let i=0; i<guest_list.length; i++){

let not_guest: string = "Farhan";
let new_guest: string = "Salman";
guest_list[1] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
  console.log(
    "Respected Sir/Madam " +
      guest_list[i] +
      ",\nWe invited you on dinner tommorow.\n\nThank You"
  );
}
guest_list.unshift("shaheen", "sarfaraz", "rizwan");
for (let i = 0; i < guest_list.length; i++) {
  console.log(
    "Respected Sir/Madam " +
      guest_list[i] +
      ",\nWe found a bigger dinner table, so now more space is avalable. Again we invited more guest into dinner party.\n\nThank You"
  );
}
