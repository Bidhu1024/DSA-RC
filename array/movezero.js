function nn(nums){
    nums.sort((a,b)=>{
        return b-a;
    })
 
    for(let i = 0;i<nums.length;i++){
        if(nums[i] != 0){
       nums.reverse()
       nums.sort((a,b)=>{
        return a-b
       })
           }
        }
    
    console.log(nums)
}


nn([1,3,12,0,0])