function sayMyName(){
console.log("p")
console.log("a")
console.log("n")
console.log("k")
console.log("a")
console.log("j")
}
//sayMyName()  ==============================================sayMyName => function ka refrence he .......//=====sayMyName => execution

// ==>
// function addTwoNumbers(number1, number2){                 // perameters
//     console.log(number1 + number2);  
// }
// addTwoNumbers(3, 4)
//<=(old method)


function addTwoNumbers(number1, number2){    // perameters
     
     // let result = number1 + number2                       // ========> 1st (long) method
     // console.log(" Hello pankaj");                        // <=======
     // return result                                        // return will terminate next execution or lines
     
     return number1 + number2                                // 2nd method  => Best (Short) Method
}
const result = addTwoNumbers(3, 5)                          // arguments
 //console.log(" Your Result is here : ", result); 


//====================================================

function loginUserMessage(username = "Rajput"){                        // pera meters
     //if (username === undefined){                           // (username === undefined    => (!username)
     if (!username){    
          console.log("Please enter your username")
          return
     }
     return `${username} just logged in` 
}
//console.log(loginUserMessage());
//console.log(loginUserMessage());                             // output : undefined



//========================================================================================
function calculateCartPrice(val1, val2, ...num1){     //(...num1) => rest operator/spread operator
     return num1
}
   //console.log(calculateCartPrice(200, 300, 400, 500));




// ================================== how to pass objects  in function ========================== 
// const user = {
//      username : "Pankaj rajput",
//      price : 199
//      }
// function handleObject(anyobject){
//      console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// // handleObject(user)                              // 1st method
// handleObject({                                     // 2nd method
//      username : "panks",
//      price : 3999
// })


//==========================> how to pass array in function <=======================================
const myNewArray = [200, 400, 5656, 5856]
function returnSecondValue(getArray){                           // getArray => any want to add 
     return getArray[3]
}
// console.log (returnSecondValue(myNewArray));                // 1st method
console.log(" Your value is here : ", returnSecondValue([200, 400, 5656, 5856]));      // 2nd method