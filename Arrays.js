const a=[10,20,30,40]
for(let i of a)
    console.log(i)

//functions
// 1.map - this maps the old array elem to given condition and returns new array
const b=a.map(i=>i+20)
console.log(b)

//2.filter - it is used to filter the array based on out conditon
const filteredArray=a.filter(i=>i>=20)
console.log(filteredArray)

// 3.find - it finds the elem which satisfies the CSSConditionRule
// 4.reduce

// destrucuting -array ,Object
// array - Any name can be used,and []
const nme=["sobhi","ridhu","kani"]
const[fi,se] =nme
console.log(fi)

//object- {} used and object oda key name exactly wants to be given
const obj={
    name:"sobhi",
    dept :"csbs"
}
const{name,dept}=obj
console.log(dept)

// spread operator -...
const arr1=[1,2,3]
const arr2=[4,5,6]          
const arr3=[...arr1,...arr2]
console.log(arr3)
// it is used to copy array or object


// rest operator -...
function sum(...args){
    let total=0         
    for(let i of args)
        total+=i
    return total
}
console.log(sum(1,2,3,4,5))
// it is used to collect multiple args into array
// it is used in function parameters only

// default parameters
function greet(name="Guest"){
    console.log("Hello "+name)
}       
greet() // Hello Guest
greet("Sobhi") // Hello Sobhi

// template literals - ``
let username="Sobhi"
let message=`Welcome ${username} to the world of JavaScript`
console.log(message)

let user="kani"
const age=20
const obj1={
    name:user,
    age:age     
}
console.log(obj)
// if key and value are same we can write like this
const obj2={
    user,
    age
}
console.log(obj1)
user="ridhu"
console.log(user)
console.log(obj1.name)
// obj1 will not change as it is created with user value "kani"


// exports 
function mul(a,b){
    return a*b
}
export {mul}
// export default mul
// only one default export is allowed in a file

// import mul from './Arrays.js'
// console.log(mul(8,2))