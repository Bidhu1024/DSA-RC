const Promise1 = Promise.reject("First Completed");
const Promise2 = Promise.reject("Second Completed");
const Promise3 = Promise.reject("Third Incomplete")

Promise.any([Promise1,Promise2,Promise3]).then((data)=>{
    console.log(data);
}).catch(err=>console.log(err))

// Polyfill for Promise.Any()