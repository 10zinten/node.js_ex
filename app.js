var greet = require('./greet') // object is returned

greet.english(); 
greet.spanish();

// Replacing Export Object with function
var greet1 = require('./greet1/greet1');
greet1();

// Adding method to Export Object
var greet2 = require('./greet1/greet2').greet;
//greet2.greet();
greet2();

// Replacing Export object by new Object Created from fucntion cnstructor
var greet3 = require('./greet1/greet3');
greet3.greet();

//Objects are By Refrence 
greet3.greeting = 'Changed Hello, World';

var greet3b = require('./greet1/greet3');
greet3b.greet();

// Notes : greet3.js file is run only once when Require is called for greet3.
//         Require than stored the module.export object address in chash memory.
//         So When Require is called for the second times it returns the same address of the Object
//         Which is stroed inside its chash. 
//         Which conclude that Objects are by refrence so changes made on greet3 reflect on greet3b.

// Conctructor function is return by require.
var Greet4 = require('./greet1/greet4');
var grtr = new Greet4(); 
grtr.greet();

// Revealing Module Pattern 
var greet5 = require('./greet1/greet5').greet;
greet5();