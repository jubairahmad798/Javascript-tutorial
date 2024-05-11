// primitive datatype
// 7 types:String,Number,Boolean,Null,Undefined,Symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);

// const bigNumber=378487219737391n

//Reference/Non-primitive
//Array, Objects,Functions

const heros=["shaktiman,avengers,doga"];

let myObject={
    name:"jubair",
    age:21,
}

const myFunction=function(){
    console.log("Hello World");
}


console.log(typeof anotherId);