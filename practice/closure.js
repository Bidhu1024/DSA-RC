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
//console.log(ans)

//Question 2
function a(){
for(var i = 0;i<3;i++){
    setTimeout(function log(){
        console.log(i);
    },i * 1000)
}
}
 a()

 

