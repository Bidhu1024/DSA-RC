console.log(this) //{}-> node GEC
console.log(this) //-> browser -> Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// check this inside the object

let obj = {
    name:"Gudu",
    getName: function(){
        console.log(this.name)
    }
}

obj.getName()

let obj1 = {
    name:"Gudu",
    getName:()=>{
        console.log(this.name)
    }
}

obj1.getName()