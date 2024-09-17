
//Question 1

// const obj = {
//     a:"one",
//     b:"two",
//     a:"three"
// }
// console.log(obj)


//Question 2

//create a function that multiplies all numeric property values of nums by 2

let nums = {
    a:100,
    b:200,
    c:"Not a number"
}



 let multiplyWithTwo = (obj)=>{
    for(let key in obj){
        if (typeof obj[key] === 'number'){

            obj[key] *= 2;
        }
    }
}
multiplyWithTwo(nums)
console.log(nums)