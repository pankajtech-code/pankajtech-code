// primitive datatype/call by value :-

// ttype =
// 1) String
// 2) Number
// 3) Boolean$) 
// 4) null(empty) ((means khali nhii he)) nul mtlb zero nhi jhe 
// 5) undefined
// 6) symbol (kise be value ko unique bnane ko use kiya jata he )
// 7) Bigint (kuch bdi value bigibnt mer use kiya jata he )

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;  //value undefined

let id = Symbol('123')
console.log(id);
const anotherId = Symbol('123')
 // console.log(id == anotherId);
//const bigNumber = 4547395786u


// refrence/non primitive    
//array, objects,function


// =============================================================================================================================================== //


// refrence /non premitive :- 
// ((( master in java  =====java scrit ke object or brower ke event master  ])))
// 1) array
// 2) object
// 3) function


// define  array =>
const heros = ["hulk", "superman", "tony"]; 

// define objects =>
let myObj = { 
    name : "pankaj",
    age : 25,
}

// define function =>
const myFunction = function(){
    console.log("hello pankaj");
}
  console.log(typeof heros);


//  => type of operator reasult

// undefined = "undefined"
// null = "object"
// boolean = "boolean"
// number = "number"
// string = "string"
// function = "object function"

/// <==================


//=======================memory type============================

// 1) stack        =>      (primitive)  mean veriable declare kra uska  copy milte he 
// 2) heap         =>       (non primitive)   means  origional value ka refrence milta he  



 let myYoutubename = "pankajdotcom"
 let anothername = "myYoutubename"
 anothername = "chai or java"
 //let anothername = "milk or tea hello";

 console.log(myYoutubename);
 console.log(anothername);

 let userOne = {
    email: "mygmail.com",
    upi: "myupI@ybk"
 }

 let userTwo = userOne 
userTwo.email = "pankaj@google.com"

console.log(userOne.email);
console.log(userTwo.email);

