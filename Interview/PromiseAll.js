let promise1 = Promise.resolve("First completed");
let promise2 = Promise.resolve("Second incompleted");
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Third completed");
})


Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
}).catch(err=>console.log("Err",err))