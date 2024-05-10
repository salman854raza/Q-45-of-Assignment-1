
// Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
console.log('\nHello, World!')
function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`You have ordered a ${size} T-shirt with the message: "${message}".`);
}

// Example usage
make_shirt(); // Large shirt with default message
make_shirt('Medium'); // Medium shirt with default message
make_shirt('Small'); // Custom shirt with a different message

make_shirt('small', 'I need a big shirt to wear')