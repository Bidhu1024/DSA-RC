function mul(...a){ // rest params
    console.log(a[2] * a[4])
}
let arr = [1,2,3,4,5] // spread
mul(...arr)