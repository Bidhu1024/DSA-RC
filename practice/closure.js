// function x (){
//  a = 5;
//     function y(){
//         console.log(a);
//     }
//     y()
// }
// x()

//numericals

function createBase(num){ //correct
return function(b){
    return num + b
}

}

let addSix = createBase(6)
let ans =addSix(10)
console.log(ans)