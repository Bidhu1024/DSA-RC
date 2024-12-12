//creating a promise


const promise = new Promise((resolve,reject)=>{
resolve("Promise Resolved")
})



async function getData(){
    return promise //it will return a promise always
}

const data = getData();
console.log(data)
data.then(val=>console.log(val))