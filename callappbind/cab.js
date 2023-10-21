// let obj = {
//     name:"charlie"
// }

// function say(){
//     return "Hello " + this.name
// }

// console.log(say.call(obj))


let age =20

const person = {
    name: 'Charlie',
    age:"25",
    getAge:function(){
        return this.age
    }
}

var person2 = {
    age:"24"
}

console.log(person.getAge.call(person2));