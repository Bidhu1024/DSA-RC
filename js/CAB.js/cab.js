let name = {
    firstname:"Bidhu",
    lastname:"Bhushan",
   
}
 function printName(){
    console.log(this.firstname + " "+ this.lastname)
}
printName.call(name)

let name2 = {
    firstname:"Sikun",
    lastname:"Gahan"
}
printName.call(name2)