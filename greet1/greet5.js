// The Revealing module Pattern
// Exposing only the porperties and methods that we want via an return object
// It is a very common and very clean way to structure and protect code within modules.

var greeting =  'Hello world !!! - from Revealing module pattern';

function greet() {
    console.log(greeting);
}

module.exports = {
    greet: greet
}