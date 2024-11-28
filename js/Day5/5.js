function outer(){
    let count = 0;
    return function  inner(){
        count ++;
        return count;
    }
}

let closure = outer();

console.log(closure()) // 1
console.log(closure()) // 2