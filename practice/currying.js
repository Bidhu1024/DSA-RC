
// Question 1 Sum(1)(2),(3)

// function Sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }


// }

// let res = Sum(1)(2)(3)
// console.log(res)


// Question 2 

// Evaluate Sum(2)(3) = > 5
// Evaluate Multiply(2)(3) = > 6
// Evaluate Divide(6)(3) = > 2
// Evaluate Substract(3)(2) = > 1


function Evaluate(operation){
return function(a){
    return function(b){
        if(operation === 'add'){
            return a+b;
        }else if (operation === 'sub'){
            return a-b;
        } else if(operation ==="mul"){
            return a*b;
        }else if (operation === 'div'){
            return a/b;
        }else return 'invalid operation'


    }
}
}

let res = Evaluate('add')(5)(2)
console.log(res)