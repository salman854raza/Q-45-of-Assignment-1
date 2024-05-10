// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
function showMagicians(magicians) {
    // Prints the names of magicians in the list
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function makeGreat(magicians) {
    // Modifies the list of magicians by adding 'the Great' to each name
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Initial list of magicians
var magicians = ["Ali", "Haseeb", "Salman"];
// Show the original list of magicians
console.log("Original list of magicians:");
showMagicians(magicians);
// Modify the list of magicians
makeGreat(magicians);
// Show the modified list of magicians
console.log("\nModified list of magicians:");
showMagicians(magicians);
