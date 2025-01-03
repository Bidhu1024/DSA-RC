let name = {
    firstname:"Bidhu",
    lastname:"Bhushan",
   
}
 function printName(hometown){
    console.log(this.firstname + " "+ this.lastname + " "+ hometown)
}
printName.call(name,"cuttack")

let name2 = {
    firstname:"Sikun",
    lastname:"Gahan"
}
printName.call(name2,"Salipur")

// we can pass arguments also to the functions

//Apply-> Function.apply()

printName.apply(name2,["Bbsr"]) //--> first argument will be the object and unlike call we will pass everything in an array.


//Bind
let res = printName.bind(name2,'salipur')
res() //->we can use it wherever we need it