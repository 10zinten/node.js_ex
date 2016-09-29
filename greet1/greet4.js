function Greetr() {
    this.greeting = 'Hello World - from Func Constructor returned by require';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr; // Giving back from the module the ablity to create object in app.js