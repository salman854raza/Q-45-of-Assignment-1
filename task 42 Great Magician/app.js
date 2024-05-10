"use strict";
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + 'the great';
    }
}
const magicians2 = ["Ali", "Haseeb", "Salman"];
make_great(magicians2);
// show_magicians (magicians2)
// function show_magicians(magicians2: string[]) {
//     throw new Error("Function not implemented.");
// }
