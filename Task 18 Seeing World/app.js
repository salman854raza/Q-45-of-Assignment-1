"use strict";
let places = ['cape town', 'delhi', 'bankok', 'ahmedabad'];
console.log('original :' + places);
// print your array in alphabetical order
console.log('copy :' + [...places].sort());
// show that your array is still in its original order by printingit.
console.log('original :' + places);
// print your array in reverse alphabetical order without changing the order of original 
console.log('copy' + [...places].sort().reverse());
// show that your array is still in its original order by printing it again.
console.log('copy' + [...places].sort().reverse());
// Reverse the order of your your list. Print the array to show that its order has changed.
console.log('original :' + places.sort());
// Reverse the order of your list again. Print the list to show it's back to its original order.
console.log('original :' + places.sort().reverse());
