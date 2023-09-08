const userEmail = ["Pankaj@gmail.com"]  // if value given then automatically pick value

if (userEmail) {
    console.log("Got user email")
}else{
    console.log("dont have user email");
}

// =================falsy values=============
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//=========true values==================
// "0", 'false', " ", [], {}, function(){}=> empty function

//================== in case of array=================

const userrEmail = []
if(userrEmail.length == 0){
    console.log("array is empty");
} 


//======================if object empty==========================
//=======================in case of object=======================

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

//=================Nullish Coaling Operator (??): Null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1);


//==================Terniary operator============================
 
// condition ? true : false
 
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
  

