let obj = {
    name:"charlie"
}

function say(){
    return "Hello " + this.name
}

console.log(say.call(obj))