Array.prototype.myMap = function (cb){
    let arr = [];
    for(let i = 0;i<this.length;i++){
        arr.push(cb(this[i],i,this));
    }
    return arr;
}

let res = [1,2,3,4,5]
let ans = res.myMap((m,i)=>{
    return {
        m,i
    }
})
console.log(ans) =>[
    { m: 1, i: 0 },
    { m: 2, i: 1 },
    { m: 3, i: 2 },
    { m: 4, i: 3 },
    { m: 5, i: 4 }
  ]
