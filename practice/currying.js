
// Question 1 Sum(1)(2),(3)

function Sum(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }


}

let res = Sum(1)(2)(3)
console.log(res)