"use strict";
// Hello Admin: Make an array of five or more username, including 
// the name 'admin'.
let users = ['sana', 'babar', 'saba', 'taha', 'admin'];
for (let user of users) {
    if (user === 'admin') {
        console.log('hello,admin, would you like to see status report?');
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
}
