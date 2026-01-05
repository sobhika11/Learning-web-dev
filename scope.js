//lexical scope - A function can be called where it is written

const { before } = require("node:test")

function outer(){
    let msg="hello"
    function inner(){
        console.log(msg)
    }
    inner()
}
outer()


//hoisting - var variables can be used before initialized,it will be moved to top
//  let and const doesnt work cause -tdz (temporal dead zone) so as these 2 has block scope
//   it has tdz so cannot beforehoisted,var doesn't goes to tdz
// tdz -{} the variable time btween {}

console.log(st)
var st="i am hoisted"
// output will be undefined
