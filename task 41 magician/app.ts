// 41. Magicians: Make a array of magician’s names. Pass the array
//  to a function
// called show_magicians(), which prints the name of each magician 
// in the array.
function showMagicians(magicians: string[]): void {
    for(const magician of magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
}
const magician: string[] = ['Ali','hamza','farman'];
showMagicians(magician)
}
// Array of magician's names
// const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// // Calling the function to show the magician's names
// showMagicians(magicianNames);


















