const isUserloggedin = true


// if ( 2 === "2"){                   // because "2" => strinfg
//     console.log(" code executed");
// }
// else {
//     console.log("code not executed");
// }




// <, >, <=, >=, ==. !=, ===, !==


// const temperature = 41

// if (temperature === 40 ){
//     console.log("temperature is less tha 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }

//===============================================================
//  const score = 200

//  if(score > 100){
//     let power = "fly"
//     console.log(`user power: ${power}`);
//  }
 //console.log(`user power; ${power}`); 

 //=========================================================
 
//  const balance = 1000

// if (balance> 500)console.log("test"),console.log("test2");  // bad method

 // ======nesting===============================================
 
 
 //const balance = 1000

//  if (balance < 500){
//     console.log("less than");
//  } 
//  else if (balance < 750){
//     console.log("less than 750");    
//  }else if (balance < 900){
//     console.log("less than 750");
//  }else{
//     console.log("less than 1200");
//  }


//===================
const userLoggedIn = true
debitCard = true
const loggedInFromgoogle = false 
const loggedInFromEmail = true
if (userLoggedIn && debitCard && 2==3) {          // ===================== && => means jitne bhi condition he true ane cheyae than code run hoga 
   console.log ("Allow to buy  this course");
}
if (loggedInFromgoogle || loggedInFromEmail) {    //====================== || => mean ek bhi condition true hui to code run ho jaega     
    console.log("user loggedin");
}