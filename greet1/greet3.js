// using Function contructor
function Greetr() {
    this.greeting = 'Hello World - from Func Constructor';
    this.greet = function() {
        console.log(this.greeting);
    }
}

//Repalcing Export Object
module.exports = new Greetr();

