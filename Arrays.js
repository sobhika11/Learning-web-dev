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