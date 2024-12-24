//creating a promise


const promise = new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve("Promise Resolved")
},3000)
})



async function getData(){
    return promise //it will return a promise always
}

//resolving promise using await

async function handlePromise(){
   const value =  await promise
   console.log(value)
   console.log('hiii')
}
handlePromise()

// const data = getData();
// console.log(data)
// data.then(val=>console.log(val))