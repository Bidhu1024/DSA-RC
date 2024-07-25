let promise1 = Promise.resolve("First completed");
let promise2 = Promise.resolve("Second incompleted");
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Third completed");
})


Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
}).catch(err=>console.log("Err",err))

//polfill for promise.all

let PromiseAll = (promises)=>{
    let result = []
    let count = 0;

    return new Promise((resolve,reject)=>{
        promises.forEach((promise,index)=>{
            promise.then((value)=>{
                result[index] = value;
                count +=1;
                if(count == promises.length){
                    resolve(result);
                }
            }).catch(err=>reject(err))
        })
    })
}

PromiseAll([promise1,promise2,promise3]).then((data)=>{
    console.log(data);
}).catch(err=>console.log(err))