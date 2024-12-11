const API = "https://api.github.com/users/Bidhu1024";



const response = fetch(API)
console.log(response)
response.then((data)=>{
    console.log(data)
}).catch(err=>console.log(err))