Array.prototype.Myfilter = function(cb){
    let temp = [];
    for (let index = 0; index < this.length; index++) {
       if(cb(this[i],i,this)){
        temp.push(this[i])
       }
       return temp
        
    }
}

// Polyfill for Array.filter()