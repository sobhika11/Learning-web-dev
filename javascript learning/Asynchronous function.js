const { userInfo } = require("os");

console.log(`start`);
setTimeout(() => {
    console.log("inside timeout");
}, 2000);
console.log(`end`);

//example of async function where the timeout runs ||ely ans doesnt stop start and end


//promises methods
// 1.promise.all()     //- it takes array of promises and returns single promise which resolves when all the promises are resolved
// 2.promise.race()    //- runs promises one by one simultaeneously ,it takes array of promises and returns single promise which resolves or rejects as soon as one of the promises is resolved or rejected
// 3.promise.allSettled() //- it takes array of promises and returns single promise which resolves after all the given promises are either resolved or rejected
// 4.promise.any()     //- it takes array of promises and returns single promise which resolves as soon as any of the promises is resolved and rejects if all the promises are rejected -returns 1 st fulfilled promise

console.log(`start`)
async function fun(){
    let res = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2.promise resolved after 2 seconds")
        }, 2000);
    });
    console.log(res)
}
fun();
console.log(`end`)


//json 
// 1.stringify()  //- converts js object to json string
// 2.parse()      //- converts json string to js object


// to store in local storage 4 methods are used
// 1.localStorage.setItem()   //- to store data in local storage
// 2.localStorage.getItem()   //- to get data from local storage
// 3.localStorage.removeItem()//- to remove data from local storage
// 4.localStorage.clear()     //- to clear all data from local storage  