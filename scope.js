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

// hoisting - trying to use an variable or function before declared is called hoisting
// - var variables can be used before initialized,it will be moved to top
//  let and const doesnt work cause -tdz (temporal dead zone) so as these 2 has block scope
//   it has tdz so cannot beforehoisted,var doesn't goes to tdz
// tdz -{} the variable time btween {}

console.log(st)
var st="i am hoisted"
// output will be undefined


//function hoisting
// but this doesnt work for expression func ->const greet=function(){} for this it doesnt work
greet()
function greet(){
    console.log("Heyy bud")
}

// hoisting willmake code neat and clear,its also while eventlisteners like add before even created


// closure -  It is a function remebers variables from its outer scope 



//Array Iteration
const a=[1,20,30,40]
for(let i of a)
    console.log(i)

a.forEach((i)=>{
    console.log(i)
})
