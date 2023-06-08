const sl = (arr)=>{
    const uniArr = Array.from(new Set(arr));

    uniArr.sort((a,b)=>{
        return b-a;
    })

    if(uniArr.length>2){
        return uniArr[1];
    }else{
        return -1;
    }
    // console.log(uniArr);
}
console.log(sl([1,2,3,45,5,6]))
