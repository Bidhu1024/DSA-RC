// function outer(){
//     let count = 0;
//     return function  inner(){
//         count ++;
//         return count;
//     }
// }

// let closure = outer();

// console.log(closure()) // 1
// console.log(closure()) // 2

// Q2: Why are closures useful?
// A: Closures are essential for encapsulating data, creating private variables, memoization, and managing asynchronous behavior.

function createCounter(){
    let count = 0;
    return {
        increment:()=> ++count,
        decrement: ()=>--count,
        value: ()=>count
    } 
}

let counter = createCounter();
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.value())