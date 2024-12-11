const API = "https://api.github.com/users/Bidhu1024";



const response = fetch(API)
console.log(response)
response.then((data)=>{
    console.log(data)
}).catch(err=>console.log(err))

const promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("success")
  },5000)
})

promise.then(data=>console.log(data)).catch(err=>console.log(err)).finally(()=>console.log("promise is settled"))


const promise1 = Promise.resolve(10);
const promise2 = Promise.reject("Error!!!")

Promise.all([promise1,promise2])
.then(value=>console.log(value))
.catch(err=>console.log(err))