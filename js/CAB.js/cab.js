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
