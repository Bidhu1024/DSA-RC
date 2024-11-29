// creating objects
//using literals

const Person = {
    name:"sdfdf",
    age:12
}

// using new Keyword

const encore = new Object()
encore.name = "abj";

// using proto or Object.create()

const proto = {greet:()=>"hello"}

const obj3 = Object.create(proto)
console.log(obj3.greet())

