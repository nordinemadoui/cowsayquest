const info = require('./information.js');
let cowsay = require("cowsay");

console.log(cowsay.say({
    text : ` i am ${info.name}, i am learning at ${info.campus}`,
    e : "OO",
    T : "U "
}));