console.log(`start`);
setTimeout(() => {
    console.log("inside timeout");
}, 2000);
console.log(`end`);

//example of async function where the timeout runs ||ely ans doesnt stop start and end


//promises methods
1.promise.all()     //- it takes array of promises and returns single promise which resolves when all the promises are resolved
2.promise.race()    //- runs promises one by one simultaeneously ,it takes array of promises and returns single promise which resolves or rejects as soon as one of the promises is resolved or rejected
3.promise.allSettled() //- it takes array of promises and returns single promise which resolves after all the given promises are either resolved or rejected
4.promise.any()     //- it takes array of promises and returns single promise which resolves as soon as any of the promises is resolved and rejects if all the promises are rejected -returns 1 st fulfilled promise
