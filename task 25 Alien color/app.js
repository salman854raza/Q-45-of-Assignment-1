"use strict";
// creat a variable called alien_color
let alien_color = "green";
//  Write an if statement to test whether alien color is green. 
// If it is print a message that the player just earned 5 points.
if (alien_color == "green") {
    console.log("the player just earned 5 points.");
}
// write one version of this program that passes the if test and another that fails.
//  (The version that fails will have no output)
alien_color = "red";
if (alien_color == "green") {
    console.log("the player just earned 5 points.");
}
