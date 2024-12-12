// const API = "https://api.github.com/users/Bidhu1024";



// const response = fetch(API)
// console.log(response)
// response.then((data)=>{
//     console.log(data)
// }).catch(err=>console.log(err))

// const promise = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("success")
//   },5000)
// })

// promise.then(data=>console.log(data)).catch(err=>console.log(err)).finally(()=>console.log("promise is settled"))


// const promise1 = Promise.resolve(10);
// const promise2 = Promise.reject("Error!!!")

// Promise.all([promise1,promise2])
// .then(value=>console.log(value))
// .catch(err=>console.log(err))

//promise.race

const promiseRace1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("First")
  },1000)
})
const promiseRace2 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Second")
  },1100)
})

Promise.race([promiseRace1,promiseRace2]).then(value=>console.log(value)).catch(err=>console.log(err))

const promiseany1 = Promise.reject("Error1");
const promiseany2 = Promise.resolve("Success");
const promiseany3 = Promise.resolve("Done");

Promise.any([promiseany1,promiseany2,promiseany3]).then(val=>console.log(val)).catch(err=>console.log(err))