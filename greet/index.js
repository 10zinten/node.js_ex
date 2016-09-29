// making available as complete Module

var english = require('./english'); // no need of .js extension. require knows auto.
var spanish = require('./spanish');

module.exports = {
    english: english,
    spanish: spanish
};