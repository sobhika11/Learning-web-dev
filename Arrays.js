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
const nme=["sobhi","maddy","kani"]
const[fi,se] =nme
console.log(fi)

//object- {} used and object oda key name exactly wants to be given
const obj={
    name:"sobhi",
    dept :"csbs"
}
const{name,dept}=obj
console.log(dept)
