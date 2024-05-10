// 43 Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
function showMagicians(magicians: string[]): void {
    // Prints the names of magicians in the list
    for (const magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    // Creates a new array with 'the Great' added to each name
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push("the Great " + magician);
    }
    return greatMagicians;
}

// Initial list of magicians
const magicians: string[] = ['Ali','salman','farman'];

// Create a new array with 'the Great' added to each magician's name
const greatMagicians: string[] = makeGreat([...magicians]); // Using spread operator to create a copy

// Show the original list of magicians
console.log("Original list of magicians:");
showMagicians(magicians);

// Show the new list of magicians with 'the Great' added
console.log("\nModified list of magicians:");
showMagicians(greatMagicians);














